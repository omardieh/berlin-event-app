import { IMapContainer } from "@/types";
import axios from "axios";
import type { LatLngTuple } from "leaflet";
import { useEffect, useState } from "react";
import { Polygon, Popup } from "react-leaflet";
import { MapContainer } from "./MapContainer/MapContainer";

export const MapScreen: React.FC = () => {
  const [clubs, setClubs] = useState([]);
  useEffect(() => {
    getClubs();
  }, []);

  const mapOptions: IMapContainer = {
    zoom: 13,
    maxZoom: 17,
    minZoom: 10,
    center: [52.52, 13.405],
    maxBounds: [
      [52.36, 13.1],
      [52.66, 13.7],
    ],
  };
  const getClubs = async () => {
    const clubs = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/map`);
    setClubs(clubs.data);
  };

  return (
    <MapContainer {...mapOptions}>
      {clubs.map((club: Club) => {
        // Check if geometry and coordinates exist
        if (
          !club.geometry ||
          !club.geometry.coordinates ||
          club.geometry.type !== "Polygon"
        ) {
          return null;
        }

        // Convert coordinates to [lat, lng] format
        const position: LatLngTuple[] = club.geometry.coordinates[0].map(
          ([lng, lat]) => [lat, lng]
        );

        return (
          <Polygon
            key={club._id}
            positions={position}
            color="blue"
            opacity={0.4}
          >
            <Popup>
              <div>
                <h3 className="text-lg font-bold">
                  {club.properties.name || "Unknown Name"}
                </h3>
                <p>
                  <strong>Phone:</strong> {club.properties.phone || "N/A"}
                </p>
                <p>
                  <strong>Website:</strong>{" "}
                  {club.properties.website ? (
                    <a
                      href={club.properties.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500"
                    >
                      {club.properties.website}
                    </a>
                  ) : (
                    "N/A"
                  )}
                </p>
                <p>
                  <strong>Accessibility:</strong>{" "}
                  {club.properties.wheelchair || "N/A"}
                </p>
              </div>
            </Popup>
          </Polygon>
        );
      })}
    </MapContainer>
  );
};

interface Club {
  _id: string;
  type: string;
  id: string;
  properties: {
    timestamp?: string;
    version?: number;
    user?: string;
    amenity?: string;
    building?: string;
    name?: string;
    phone?: string;
    website?: string;
    wheelchair?: string;
    id?: string;
  };
  geometry: {
    type: "Polygon";
    coordinates: [number, number][][];
  };
}
