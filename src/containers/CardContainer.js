import Card from "../components/Card";
import { Outlet } from "react-router-dom";
import "../css/CardContainer.css";

const CardContainer = ({ firstTen }) => {
  const mapRestaurantData = firstTen.map((restaurant) => {
    return <Card key={restaurant.id} logo={restaurant.logoUrl} cuisines={restaurant.cuisines} name={restaurant.name} address={restaurant.address} rating={restaurant.rating}/>;
  });

  return <section className="card_container">
    {mapRestaurantData}
    <Outlet/>
  </section>;
};

export default CardContainer;
