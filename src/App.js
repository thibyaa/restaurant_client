import { useEffect, useState } from 'react';
import './App.css';
import CardContainer from'./containers/CardContainer';

function App() {

  const [restaurantData, setRestaurantData] = useState([]);

  useEffect(()=>{
    const fetchData = async () => {
      const response = await fetch(
       "http://localhost:8010/proxy/discovery/uk/restaurants/enriched/bypostcode/EC4M7RF");
       const jsonData = await response.json();
       setRestaurantData(jsonData.restaurants);
    }

    fetchData();
  }, [])
  
  return (
  <>
    <CardContainer restaurantData={restaurantData}/>
  </>
  );
}

export default App;
