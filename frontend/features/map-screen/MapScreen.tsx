import { IMapScreen } from "@/types";
import type { MapOptions } from "leaflet";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";

export const MapScreen: React.FC<IMapScreen & MapOptions> = ({
  ...options
}) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    isMounted && (
      <MapContainer className="h-[200px] w-full relative" {...options}>
        <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png" />
      </MapContainer>
    )
  );
};
