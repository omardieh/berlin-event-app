import { IFetcher, IUseFetch } from "@/types";
import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import { useEffect, useMemo, useState } from "react";

export default function useFetch<T>(baseURL: string): IUseFetch<T> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios.defaults.headers.common["Access-Control-Allow-Headers"] =
      "Authorization";
    const accessToken = localStorage.getItem("accessToken");

    const requestInterceptor = axios.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        if (accessToken) {
          (
            config.headers as Record<string, string>
          ).Authorization = `Bearer ${accessToken}`;
        }
        return config;
      }
    );

    return () => {
      axios.interceptors.request.eject(requestInterceptor);
      axios.defaults.withCredentials = false;
      delete axios.defaults.headers.common["Access-Control-Allow-Headers"];
    };
  }, []);

  const fetcher = useMemo(
    () =>
      async ({
        method = "GET",
        endPoint = "/",
        reqBody = null,
        headers = {},
        timeout = 0,
      }: IFetcher) => {
        setLoading(true);
        const source = axios.CancelToken.source();
        try {
          const response = await axios({
            method,
            url: endPoint,
            baseURL,
            data: reqBody,
            headers,
            timeout,
            cancelToken: source.token,
          });
          setData(response.data);
          setError(null);
        } catch (err) {
          const axiosError = err as AxiosError;
          setError(
            axiosError.response ? axiosError.response.data : axiosError.message
          );
        } finally {
          setLoading(false);
        }
      },
    [baseURL]
  );

  return { data, error, loading, fetcher };
}
