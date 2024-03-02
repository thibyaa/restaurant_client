const InputField = ({setPostCode}) => {

    const handleChange = (event) => {
        event.preventDefault();
        setPostCode(event.target.postCode.value);
    }

    return ( 
        <>
        <h3>
            Enter Postcode:
        </h3>
        <form onSubmit={handleChange}>
        <input id="post-code" name="postCode"></input>
        <button> search </button>
        </form>
        </>
     );
}
 
export default InputField;