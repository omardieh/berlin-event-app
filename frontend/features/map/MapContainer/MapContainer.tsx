import { IMapContainer } from "@/types";
import { MapContainer as LeafletMapContainer, TileLayer } from "react-leaflet";

export const MapContainer: React.FC<IMapContainer> = ({
  children,
  ...options
}) => {
  return (
    <LeafletMapContainer className="h-full w-full relative" {...options}>
      <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png" />
      {children}
    </LeafletMapContainer>
  );
};
