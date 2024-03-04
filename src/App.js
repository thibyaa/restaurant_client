import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import { useQuery } from "react-query";
import CardContainer from "./containers/CardContainer";
import InputField from "./components/InputField/InputField";
import "./App.css";

function App() {
  const [postCode, setPostCode] = useState("EC4M7RF");

  const { isLoading, data } = useQuery(
    [postCode],
    async () => {
      console.log("called");
      const response = await fetch(
        "http://localhost:8010/proxy/discovery/uk/restaurants/enriched/bypostcode/" +
          postCode.trim().toUpperCase()
      );
      const jsonData = await response.json();
      return jsonData;
    },
    { staleTime:6.048e+8, retry: 0, refetchOnWindowFocus: false }
  );


  const router = createBrowserRouter([
    {
      path: "/",
      element: <InputField setPostCode={setPostCode} />,
    },
    {
      path: "search",
      element: (
        <CardContainer
          isLoading={isLoading}
          postCode={postCode}
          firstTen={data?.restaurants.slice(0, 10)}
          centralCoordinates={data?.metaData.location.coordinates.sort(
            (a, b) => b - a
          )}
        />
      ),
    },
  ]);

  return (
    <section className="home_page">
      <RouterProvider router={router} />
    </section>
  );
}

export default App;
