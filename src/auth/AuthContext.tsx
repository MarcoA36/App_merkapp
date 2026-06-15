import * as SecureStore from "expo-secure-store";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type PropsWithChildren
} from "react";
import { Platform } from "react-native";
import { loginRequest, registerRequest } from "../api/auth";
import type { User } from "../types";

const TOKEN_KEY = "merkao.token";
const USER_KEY = "merkao.user";

const sessionStorage = {
  async getItem(key: string) {
    if (Platform.OS === "web") {
      return globalThis.localStorage?.getItem(key) ?? null;
    }

    return SecureStore.getItemAsync(key);
  },
  async setItem(key: string, value: string) {
    if (Platform.OS === "web") {
      globalThis.localStorage?.setItem(key, value);
      return;
    }

    await SecureStore.setItemAsync(key, value);
  },
  async deleteItem(key: string) {
    if (Platform.OS === "web") {
      globalThis.localStorage?.removeItem(key);
      return;
    }

    await SecureStore.deleteItemAsync(key);
  }
};

type AuthContextValue = {
  token: string | null;
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: PropsWithChildren) {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function hydrateSession() {
      try {
        const [storedToken, storedUser] = await Promise.all([
          sessionStorage.getItem(TOKEN_KEY),
          sessionStorage.getItem(USER_KEY)
        ]);

        setToken(storedToken);
        setUser(storedUser ? JSON.parse(storedUser) : null);
      } finally {
        setIsLoading(false);
      }
    }

    hydrateSession();
  }, []);

  const persistSession = useCallback(async (nextToken: string, nextUser: User) => {
    await Promise.all([
      sessionStorage.setItem(TOKEN_KEY, nextToken),
      sessionStorage.setItem(USER_KEY, JSON.stringify(nextUser))
    ]);
    setToken(nextToken);
    setUser(nextUser);
  }, []);

  const login = useCallback(
    async (email: string, password: string) => {
      const response = await loginRequest(email, password);
      await persistSession(response.token, response.user);
    },
    [persistSession]
  );

  const register = useCallback(
    async (name: string, email: string, password: string) => {
      const response = await registerRequest(name, email, password);
      await persistSession(response.token, response.user);
    },
    [persistSession]
  );

  const logout = useCallback(async () => {
    await Promise.all([
      sessionStorage.deleteItem(TOKEN_KEY),
      sessionStorage.deleteItem(USER_KEY)
    ]);
    setToken(null);
    setUser(null);
  }, []);

  const value = useMemo(
    () => ({ token, user, isLoading, login, register, logout }),
    [token, user, isLoading, login, register, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return context;
}
