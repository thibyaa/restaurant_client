import { Link, useLocation, useNavigate, useNavigation } from "react-router-dom";
import { useEffect, useState } from "react";
import "../css/InputField.css";

const UK_POSTCODE_PATTERN = "([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\s?[0-9][A-Za-z]{2})";

const InputField = ({setPostCode }) => {

  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  // const navigate = useNavigation();
  const location = useLocation();

  // if(navigate.state === "loading"){
  //   return <h1>Loading</h1>;
  // }

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };
  
  const handleClick = () => {
    setPostCode(searchValue);
  };

  // const handleClick = () =?

  useEffect(()=>{
    navigate("/search")
  }, [location.key])

  
  return (
    <section className="postal_code_form">
      {/* <button onClick={handleReturn}> Back </button> */}
      <h3>Enter your postcode</h3>
        <input id="post-code" name="postCode" onChange={handleChange}></input>
        <hr></hr>
        {/* <Link to={"/search"}> */}
          <button type="button" onClick={handleClick} disabled={!searchValue.match(UK_POSTCODE_PATTERN)}> Find me food </button>
        {/* </Link> */}
    </section>
  );
};

export default InputField;
