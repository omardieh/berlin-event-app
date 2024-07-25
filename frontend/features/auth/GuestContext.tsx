"use client";
import { IAuthContextProviderProps, IAuthContextType } from "@/types";
import { createContext, FC, useContext, useState } from "react";

const AuthContext = createContext<IAuthContextType | {}>({});

export const AuthContextProvider: FC<IAuthContextProviderProps> = ({
  children,
}) => {
  const [guest, setGuest] = useState({});

  return (
    <AuthContext.Provider value={{ guest, setGuest }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(
      "useAuthContext must be used within an AuthContextProvider"
    );
  }
  return context;
};
