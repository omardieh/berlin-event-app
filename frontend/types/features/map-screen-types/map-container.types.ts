import { MapOptions } from "leaflet";

export interface IMapContainer extends MapOptions {
  children?: React.ReactNode;
  zoom: number;
  maxZoom: number;
  minZoom: number;
  center: [number, number];
  maxBounds: [[number, number], [number, number]];
}
