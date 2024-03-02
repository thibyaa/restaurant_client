import Card from '../components/Card';

const CardContainer = ({firstTen}) => {

    const mapRestaurantData = firstTen.map((restaurant) => {
        return <Card key={restaurant.id} restaurant={restaurant}/>
    })

    return ( 
        <section>
        {mapRestaurantData}
        </section>
     );
}
 
export default CardContainer;