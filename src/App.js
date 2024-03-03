import { useEffect, useState } from "react";
import "./App.css";
import CardContainer from "./containers/CardContainer";
import InputField from "./components/InputField";

function App() {
  const [restaurantData, setRestaurantData] = useState([]);
  const [firstTen, setFirstTen] = useState([]);
  const [postCode, setPostCode] = useState("SW36NP");

  useEffect(() => {
    const fetchData = async (postCode) => {
      const response = await fetch(
        "http://localhost:8010/proxy/discovery/uk/restaurants/enriched/bypostcode/" +
          postCode.trim().toUpperCase()
      );
      const jsonData = await response.json();
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
    </>
  );
}

export default App;
