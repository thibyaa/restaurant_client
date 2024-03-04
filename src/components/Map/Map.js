import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = ({ firstTen, centralCoordinates }) => {
  const restaurantMarkers = firstTen.map((restaurant) => {
    return (
      <Marker
        key={restaurant.id}
        position={restaurant.address.location.coordinates.sort((a, b) => b - a)}
      >
        <Popup>
          {restaurant.name} <br /> {restaurant.address.firstLine},
          {restaurant.address.city}, {restaurant.address.postalCode}
        </Popup>
      </Marker>
    );
  });

  return (
    <MapContainer center={centralCoordinates} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {restaurantMarkers}
    </MapContainer>
  );
};

export default Map;
