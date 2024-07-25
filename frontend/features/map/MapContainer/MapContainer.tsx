import { IMapContainer } from "@/types";
import { useEffect, useState } from "react";
import { MapContainer as LeafletMapContainer, TileLayer } from "react-leaflet";

export const MapContainer: React.FC<IMapContainer> = ({
  children,
  ...options
}) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    isMounted && (
      <LeafletMapContainer className="h-full w-full relative" {...options}>
        <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png" />
        {children}
      </LeafletMapContainer>
    )
  );
};
