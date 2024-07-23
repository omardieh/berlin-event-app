import { Method } from "axios";

export interface IFetcher {
  method?: Method;
  endPoint?: string;
  reqBody?: any;
  headers?: Record<string, string>;
  timeout?: number;
}

export interface IUseFetch<T> {
  data: T | null;
  error: any | null;
  loading: boolean;
  fetcher: (params: IFetcher) => Promise<void>;
}
