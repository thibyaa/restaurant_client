import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";

const Map = ({firstTen}) => {

    const restaurantMarkers = firstTen.map((restaurant)=>{
        console.log(restaurant.address.location.coordinates)
        // return (
        // <Marker key={restaurant.id} position={restaurant.address.location.coordinates.reverse()}>
        //     <Popup> {restaurant.name} </Popup>
        // </Marker>
        // );
    })


  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {restaurantMarkers}
    </MapContainer>
  );
};

export default Map;
