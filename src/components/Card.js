const Card = (restaurant) => {
    
    const availableCuisine = (Object.values(restaurant)[0].cuisines).forEach((cuisines)=>{
        return <li> {cuisines.name} </li>;
    })

    return ( 
        <>
        <h2> {Object.values(restaurant)[0].name} </h2>

        {/* there should be a better was to collate this data */}
        <p> {Object.values(restaurant)[0].address.firstLine} </p>
        <p> {Object.values(restaurant)[0].address.city} </p>
        <p> {Object.values(restaurant)[0].address.postalCode} </p>

        <ul> {availableCuisine} </ul> 
        
        <p> {Object.values(restaurant)[0].rating.starRating} </p> 
        <hr></hr>
        </>
     );
}
 
export default Card;