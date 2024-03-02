import Card from '../components/Card';

const CardContainer = ({restaurantData}) => {

    // splice the data to only show the first 10

    const mapRestaurantData = restaurantData.map((restaurant) => {
        return <Card key={restaurant.id} restaurant={restaurant}/>
    })

    return ( 
        <section>
        {mapRestaurantData}
        </section>
     );
}
 
export default CardContainer;