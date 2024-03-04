import Card from "../components/Card/Card";
import Map from "../components/Map/Map";
import { useLoaderData, useNavigate } from "react-router-dom";
import "./CardContainer.css";

const CardContainer = () => {
  const { centralCoordinates, firstTen } = useLoaderData();
  const navigate = useNavigate();

  const mapRestaurantData = firstTen.map((restaurant) => {
    return (
      <Card
        key={restaurant.id}
        logo={restaurant.logoUrl}
        cuisines={restaurant.cuisines}
        name={restaurant.name}
        address={restaurant.address}
        rating={restaurant.rating}
      />
    );
  });

  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
      <button className="back_button" onClick={handleClick}>
        Back
      </button>
      <section className="card_container">
        {mapRestaurantData}
        <Map firstTen={firstTen} centralCoordinates={centralCoordinates} />
      </section>
    </>
  );
};

export default CardContainer;
