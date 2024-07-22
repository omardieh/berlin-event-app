"use client";
import { IMapScreen } from "@/types";
import dynamic from "next/dynamic";

const DynamicMapScreen = dynamic(
  async () => (await import("@/features")).MapScreen,
  {
    ssr: false,
  }
);

export default function Map() {
  const mapOptions: IMapScreen = {
    zoom: 13,
    maxZoom: 17,
    minZoom: 10,
    center: [52.52, 13.405],
    maxBounds: [
      [52.36, 13.1],
      [52.66, 13.7],
    ],
  };
  return (
    <>
      <div className="h-[calc(100vh-6em)] w-screen">
        <DynamicMapScreen {...mapOptions} />
      </div>
    </>
  );
}
