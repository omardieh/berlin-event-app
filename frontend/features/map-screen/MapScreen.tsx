import { IMapScreen } from "@/types";
import axios from "axios";
import type { MapOptions } from "leaflet";
import { useEffect, useState } from "react";
import { MapContainer, Polygon, Popup, TileLayer } from "react-leaflet";

export const MapScreen: React.FC<IMapScreen & MapOptions> = ({
  ...options
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    getClubs();
  }, []);

  const [clubs, setClubs] = useState([]);

  const getClubs = async () => {
    const clubs = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/map`);
    setClubs(clubs.data);
  };

  return (
    isMounted && (
      <MapContainer className="h-[200px] w-full relative" {...options}>
        <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png" />
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
          const position = club.geometry.coordinates[0].map(([lng, lat]) => [
            lat,
            lng,
          ]);

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
    )
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
    type: string;
    coordinates: [number, number][][];
  };
}
