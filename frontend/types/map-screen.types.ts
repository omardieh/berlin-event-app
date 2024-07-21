export interface IMapScreen {
  zoom: number;
  maxZoom: number;
  minZoom: number;
  center: [number, number];
  maxBounds: [[number, number], [number, number]];
}
