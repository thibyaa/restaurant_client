import Card from "../components/Card";
import { useLoaderData } from "react-router-dom";
import Map from "../components/Map";
import "../css/CardContainer.css";

const CardContainer = ({ centralCoordinates }) => {

  const firstTen = useLoaderData();

  const mapRestaurantData = firstTen.map((restaurant) => {
    return <Card key={restaurant.id} logo={restaurant.logoUrl} cuisines={restaurant.cuisines} name={restaurant.name} address={restaurant.address} rating={restaurant.rating}/>;
  });

  return <section className="card_container">
    {mapRestaurantData}
    <Map firstTen={firstTen} centralCoordinates={centralCoordinates}/>
  </section>;
};

export default CardContainer;
