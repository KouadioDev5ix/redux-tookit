import type { AuthContextType } from "@/types/AuthContext";
import React from "react";

export const AuthContext = React.createContext<AuthContextType | undefined>(
  undefined,
);


