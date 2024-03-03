import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import CardContainer from "./containers/CardContainer";
import InputField from "./components/InputField";
import "./App.css";

function App() {
  const [postCode, setPostCode] = useState("EC4M7RF");
  const [centralCoordinates, setCentralCoordinates] = useState([
    51.516445, -0.103125,
  ]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <InputField setPostCode={setPostCode} />,
    },
    {
      path: "search",
      element: (
        <CardContainer
          centralCoordinates={centralCoordinates}
        />
      ),
      loader: async () => {
        const response = await fetch(
          "http://localhost:8010/proxy/discovery/uk/restaurants/enriched/bypostcode/" +
            postCode.trim().toUpperCase()
        );
        const jsonData = await response.json();

        const sortedCoodinates = jsonData.metaData.location.coordinates.sort((a, b) => b - a);
        setCentralCoordinates(sortedCoodinates);

        return jsonData.restaurants.slice(0, 10);
      },
    },
  ]);

  return (
    <section className="home_page">
      <RouterProvider router={router} />
    </section>
  );
}

export default App;
