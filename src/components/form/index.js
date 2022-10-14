import axios from "axios";
import { useContext } from "react";
import BaseData from "../../context/BaseData";

function Form() {
  const context = useContext(BaseData);
  const { token, logged } = context;
  let [token1, setToken] = token;
  let [logged1, setLogged] = logged;

  function login() {
    console.log(context);
    axios
      .post(`${context.baseUrl}/auth/login`, context.values)
      .then((res) => res.data.token)
      .then((token) => {
        setToken(token);
        setLogged(true);
      });
  }

  function submit(e) {
    e.preventDefault();

    const email = document.getElementById("email");
    const id = document.getElementById("discordId");

    context.values.email = email.value;
    console.log(context.values.email);
    context.values.discordId = id.value;
    console.log(context.values.discordId);

    login();
  }

  return (
    <form className="form" onSubmit={submit}>
      <div>
        <label for="email">EMAIL</label>
        <br />
        <input
          type="email"
          name="email"
          id="email"
          className="InputData"
          placeholder="email"
          required
        />
      </div>
      <div>
        <label for="discordId">DISCORD ID</label>
        <br />
        <input
          type="text"
          name="discordId"
          id="discordId"
          className="InputData"
          placeholder="Discord Id"
          required
        />
      </div>
      <button type="submit" className="btnSubmit">
        Login
      </button>
    </form>
  );
}

export default Form;
