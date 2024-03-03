const InputField = ({ setPostCode }) => {
  const handleChange = (event) => {
    event.preventDefault();
    setPostCode(event.target.postCode.value);
    event.target.reset();
  };

  return (
    <section className="postal_code_form">
      <h3>Enter Postcode:</h3>
      <form onSubmit={handleChange}>
        <input id="post-code" name="postCode"></input>
        <button> search </button>
      </form>
    </section>
  );
};

export default InputField;
