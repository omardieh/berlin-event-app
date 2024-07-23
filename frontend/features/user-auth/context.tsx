"use client";
import { createContext, FC, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthContextProvider: FC = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
