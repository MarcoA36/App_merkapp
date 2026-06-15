import { apiRequest } from "./client";
import type { AuthResponse } from "../types";

export function loginRequest(email: string, password: string) {
  return apiRequest<AuthResponse>("/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password })
  });
}

export function registerRequest(name: string, email: string, password: string) {
  return apiRequest<AuthResponse>("/auth/register", {
    method: "POST",
    body: JSON.stringify({ name, email, password })
  });
}
