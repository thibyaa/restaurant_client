const Card = (restaurant) => {

    return ( 
        <>
        <p> {Object.values(restaurant)[0].name} </p>

        {/* there should be a better was to collate this data */}
        <p> {Object.values(restaurant)[0].address.firstLine} </p>
        <p> {Object.values(restaurant)[0].address.city} </p>
        <p> {Object.values(restaurant)[0].address.postalCode} </p>
        
        {/* cuisines needs a loop */}
        <p> {Object.values(restaurant)[0].cuisines[0].name} </p> 
        
        <p> {Object.values(restaurant)[0].rating.starRating} </p> 
        <br></br>
        </>
     );
}
 
export default Card;