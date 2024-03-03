const Card = ({ cuisines, name, address, rating }) => {
  const availableCuisine = cuisines.map((cuisine, id) => {
    return <li key={id}> {cuisine.name} </li>;
  });

  return (
    <section className="restaurant_card">
      <h2> {name} </h2>

      <div className="address">
        <p> {address.firstLine} </p>
        <p> {address.city} </p>
        <p> {address.postalCode} </p>
      </div>

      <ul> {availableCuisine} </ul>

      <p> rating: {rating.starRating} </p>
      <hr></hr>
    </section>
  );
};

export default Card;
