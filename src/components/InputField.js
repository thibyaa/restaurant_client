import "../css/InputField.css";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

const InputField = ({ setPostCode }) => {

  const navigate = useNavigate();

  const handleChange = (event) => {
    event.preventDefault();
    setPostCode(event.target.postCode.value);
    navigate("/search/map");
    event.target.reset();
  };

  return (
    <section className="postal_code_form">
      <h3>Enter your postcode</h3>
      <form onSubmit={handleChange}>
        <input id="post-code" name="postCode"></input>
        <hr></hr>
        <button> Find me food </button>
      </form>
      <Outlet/>
    </section>
  );
};

export default InputField;
