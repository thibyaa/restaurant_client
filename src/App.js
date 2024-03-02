import { useState } from 'react';
import './App.css';
import CardContainer from'./containers/CardContainer';

function App() {

  const [restaurantData, setRestaurantData] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
     "http://localhost:8010/proxy/discovery/uk/restaurants/enriched/bypostcode/EC4M7RF");
     const jsonData = await response.json();
     console.log(jsonData);
  }

  fetchData();

  return (
  <>
    <CardContainer/>
  </>
  );
}

export default App;
