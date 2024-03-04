import "./Card.css";

const Card = ({ cuisines, name, address, rating, logo }) => {
  const availableCuisine = cuisines.map((cuisine, id) => {
    return <li key={id}> {cuisine.name} </li>;
  });

  return (
    <section className="restaurant_card">
      <h2> {name.toUpperCase()} </h2>
      <img src={logo} alt={name} />
      <p>
        {address.firstLine}, {address.city}, {address.postalCode}
      </p>
      <ul> {availableCuisine} </ul>
      <p> Rating: {rating.starRating} </p>
    </section>
  );
};

export default Card;
