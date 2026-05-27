// components/auth/AuthLayout.tsx

import {
  KeyboardAvoidingView,
  Platform,
  View,
} from "react-native";
import AuthHeader from "./AuthHeader";

type Props = {
  children: React.ReactNode;
};

export default function AuthLayout({
  children,
}: Props) {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={
        Platform.OS === "ios"
          ? "padding"
          : "height"
      }
    >
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          paddingHorizontal: 25,
          paddingTop: 30,
        }}
      >
        <AuthHeader />

        {children}
      </View>
    </KeyboardAvoidingView>
  );
}