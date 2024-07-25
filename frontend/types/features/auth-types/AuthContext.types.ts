import { Dispatch, ReactNode, SetStateAction } from "react";

export interface IAuthContextType {
  user: {};
  setUser: Dispatch<SetStateAction<{}>>;
}

export interface IAuthContextProviderProps {
  children: ReactNode;
}
