import React from "react";
import { AuthContext } from "./Auth";
import type { AuthContextType } from "@/types/AuthContext";

type props = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: props) => {
  const [user, setUser] = React.useState<string | null>(null);

  const logIn = (name: string) => setUser(name);

  const logOut = () => setUser(null);

  const value: AuthContextType = {
    login: logIn,
    logOut,
    user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
