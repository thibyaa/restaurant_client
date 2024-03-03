import Card from "../components/Card";

const CardContainer = ({ firstTen }) => {
  const mapRestaurantData = firstTen.map((restaurant) => {
    return <Card key={restaurant.id} cuisines={restaurant.cuisines} name={restaurant.name} address={restaurant.address} rating={restaurant.rating}/>;
  });

  return <section>{mapRestaurantData}</section>;
};

export default CardContainer;
