import { useState } from 'react';
import './App.css';
import CardContainer from'./containers/CardContainer';

function App() {

  const [restaurantData, setRestaurantData] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
     "https://uk.api.just-eat.io/discovery/uk/restaurants/enriched/bypostcode/EC4M7RF");
     const jsonData = await response.json();
     console.log(jsonData);
     setRestaurantData(jsonData);
  }

  fetchData();

  return (
  <>
    <CardContainer/>
  </>
  );
}

export default App;
