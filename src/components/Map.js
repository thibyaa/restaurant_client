import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";

const Map = ({firstTen, centralCoordinates}) => {

    const restaurantMarkers = firstTen.map((restaurant)=>{
        return (
        <Marker key={restaurant.id} position={restaurant.address.location.coordinates.sort((a, b)=>(b - a))}>
            <Popup> {restaurant.name} </Popup>
        </Marker>
        );
    })
    
console.log(centralCoordinates);

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
