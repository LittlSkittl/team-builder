import "./Form.css";

const Form = (props) => {

  const handleChange = event => {
    const { name, value } = event.target

    props.change(name, value)
  }

  const handleSubmit = event => {
    event.preventDefault();
    props.submit();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Username
        <input
          name="name"
          value={props.values.name}
          placeholder="Enter username"
          onChange={handleChange}
        />
        </label>
        <br />

        <label>Email
        <input
          value={props.values.email}
          name="email"
          placeholder="Enter email"
          onChange={handleChange}
        />
        </label>
        <br />

        <label>Enter your role here!
          <input
            placeholder="Enter your role here!"
            value={props.values.role}
            name="role"
            onChange={handleChange}
          />
        </label>
        <input type="submit" value='Create your team!'/>
      </form>
    </div>
  );
};

export default Form;
