import "../css/InputField.css";

const InputField = ({ setPostCode }) => {
  const handleChange = (event) => {
    event.preventDefault();
    setPostCode(event.target.postCode.value);
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
    </section>
  );
};

export default InputField;
