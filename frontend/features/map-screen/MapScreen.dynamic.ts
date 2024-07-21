import dynamic from "next/dynamic";

export const MapScreenDynamic = dynamic(
  async () => (await import("./MapScreen")).MapScreen,
  {
    ssr: false,
  }
);
