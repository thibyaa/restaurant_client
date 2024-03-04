import "./Card.css";

const Card = ({ cuisines, name, address, rating, logo }) => {
  const availableCuisine = cuisines.map((cuisine, id) => {
    return <li key={id}> {cuisine.name} </li>;
  });

  return (
    <section className="restaurant_card">
      <h2> {name && name.toUpperCase()} </h2>
      {logo && <img src={logo} alt={name} />}
      {address && <p>
        {address.firstLine}, {address.city}, {address.postalCode}
      </p>}
      <ul> {availableCuisine} </ul>
      <p> Rating: {rating && rating.starRating} </p>
    </section>
  );
};

export default Card;
