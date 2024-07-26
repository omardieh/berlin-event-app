"use client";
import { IGuestContext, IGuestContextProvider } from "@/types";
import { createContext, FC, useContext, useState } from "react";

const GuestContext = createContext<IGuestContext | {}>({});

export const GuestContextProvider: FC<IGuestContextProvider> = ({
  children,
}) => {
  const [guest, setGuest] = useState({});

  return (
    <GuestContext.Provider value={{ guest, setGuest }}>
      {children}
    </GuestContext.Provider>
  );
};

export const useGuestContext = () => {
  const context = useContext(GuestContext);
  if (!context) {
    throw new Error(
      "useAuthContext must be used within an AuthContextProvider"
    );
  }
  return context;
};
