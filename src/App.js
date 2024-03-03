import { useEffect, useState } from "react";
import "./App.css";
import CardContainer from "./containers/CardContainer";
import InputField from "./components/InputField";
import Map from "./components/Map";


function App() {
  const [restaurantData, setRestaurantData] = useState([]);
  const [firstTen, setFirstTen] = useState([]);
  const [postCode, setPostCode] = useState("SW36NP");
  const [centralCoordinates, setCentralCoordinates] = useState([51.489743, -0.170855]);

  useEffect(() => {
    const fetchData = async (postCode) => {
      const response = await fetch(
        "http://localhost:8010/proxy/discovery/uk/restaurants/enriched/bypostcode/" +
          postCode.trim().toUpperCase()
      );
      const jsonData = await response.json();
      setCentralCoordinates(jsonData.metaData.location.coordinates.sort((a, b)=>(a - b)).reverse());
      setRestaurantData(jsonData.restaurants);
    };

    fetchData(postCode);
  }, [postCode]);

  useEffect(() => {
    const smallerDataSet = restaurantData.slice(0, 10);
    setFirstTen(smallerDataSet);
  }, [restaurantData]);

  return (
    <>
      <InputField setPostCode={setPostCode} />
      <CardContainer firstTen={firstTen} />
      <Map firstTen={firstTen} centralCoordinates={centralCoordinates}/>
    </>
  );
}

export default App;
