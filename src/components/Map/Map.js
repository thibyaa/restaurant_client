import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from 'leaflet';
import "./Map.css";

const Map = ({ firstTen, centralCoordinates }) => {
  let logoIcon;
  const restaurantMarkers = firstTen.map((restaurant) => {
    logoIcon = L.icon({
      iconUrl: restaurant.logoUrl,
      iconSize:     [40, 40], 
      popupAnchor:  [-3, -20],
      className: "logo"
  });

    return (
      <Marker
        key={restaurant.id}
        position={restaurant.address.location.coordinates.sort((a, b) => b - a)}
        riseOnHover={true}
        icon={logoIcon}
      >
        <Popup>
          {restaurant.name} <br /> {restaurant.address.firstLine},
          {restaurant.address.city}, {restaurant.address.postalCode}
        </Popup>
      </Marker>
    );
  });

  return (
    <MapContainer center={centralCoordinates} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {restaurantMarkers}
    </MapContainer>
  );
};

export default Map;
