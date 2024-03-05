import Card from "../components/Card/Card";
import Map from "../components/Map/Map";
import { Link } from "react-router-dom";
import "./CardContainer.css";

const CardContainer = ({
  centralCoordinates,
  firstTen,
  isLoading,
  postCode,
}) => {
  if (isLoading) {
    return <h1>Food options loading...</h1>;
  }

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

  return (
    <>
      <div className="postcode_results">
        <h4> restaurants near: </h4>
        <h2>
          {postCode.toUpperCase()}
          <Link to="/">
            <button className="back_button column_a">Back</button>
          </Link>
        </h2>
      </div>
        <Map firstTen={firstTen} centralCoordinates={centralCoordinates} />
      <h1> SEARCH RESULTS </h1>
      <section className="card_container">
        {mapRestaurantData}
      </section>
    </>
  );
};

export default CardContainer;
