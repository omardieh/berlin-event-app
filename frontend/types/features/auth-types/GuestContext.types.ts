import { Dispatch, ReactNode, SetStateAction } from "react";

export interface IGuestContext {
  user: {};
  setUser: Dispatch<SetStateAction<{}>>;
}

export interface IGuestContextProvider {
  children: ReactNode;
}
