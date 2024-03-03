import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import CardContainer from "./containers/CardContainer";
import InputField from "./components/InputField";
import Map from "./components/Map";


function App() {
  const [restaurantData, setRestaurantData] = useState([]);
  const [firstTen, setFirstTen] = useState([]);
  const [postCode, setPostCode] = useState("EC4M7RF");
  const [centralCoordinates, setCentralCoordinates] = useState([51.516445, -0.103125]);

  useEffect(() => {
    const fetchData = async (postCode) => {
      const response = await fetch(
        "http://localhost:8010/proxy/discovery/uk/restaurants/enriched/bypostcode/" +
          postCode.trim().toUpperCase()
      );
      const jsonData = await response.json();
      setRestaurantData(jsonData.restaurants);

      const sortedCoodinates = jsonData.metaData.location.coordinates.sort((a, b)=>(a - b)).reverse()
      setCentralCoordinates(sortedCoodinates);
    };

    fetchData(postCode);
  }, [postCode]);

  useEffect(() => {
    const smallerDataSet = restaurantData.slice(0, 10);
    setFirstTen(smallerDataSet);
  }, [restaurantData]);

  return (
    <section className="home_page">
      <InputField setPostCode={setPostCode} />
      <CardContainer firstTen={firstTen} />
      <Map firstTen={firstTen} centralCoordinates={centralCoordinates}/>
    </section>
  );
}

export default App;
