import { Link } from "react-router-dom";
import { useState } from "react";
import "./InputField.css";

const UK_POSTCODE_PATTERN =
  "([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))s?[0-9][A-Za-z]{2})";

const InputField = ({ setPostCode }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleClick = () => {
    setPostCode(searchValue);
  };

  return (
    <>
      <section className="postal_code_form">
        <h3>Enter your postcode</h3>
        <input id="post-code" name="postCode" onChange={handleChange}></input>
        <Link to={"/search"}>
          <button
            type="button"
            onClick={handleClick}
            disabled={!searchValue.match(UK_POSTCODE_PATTERN)}
          >
            Find me food
          </button>
        </Link>
      </section>
    </>
  );
};

export default InputField;
