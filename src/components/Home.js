import React, { useState } from "react";
import BaseData from "../context/BaseData";
import Welcome from "./welcome";
import Form from "./form";

// CREDENCIALES DE PRUEBA:
// 
//  EMAIL: 'ximic4@gmail.com'
//  ID: '732385630134337610'
//
//  EMAIL: 'jose@larnu.com'
//  ID: '310544245155168256'
//
//  NOTA: Funciona con cualquier usuario, espero le guste!

function Home() {
  const [token, setToken] = useState(null);
  const [logged, setLogged] = useState(false);
  const [email, setEmail] = useState('');
  const [id, setId] = useState('');

  const userData = {
    baseUrl: "https://ms-discord-upy5mhs63a-rj.a.run.app",
    values: {
      email: [email, setEmail],
      discordId: [id, setId],
    },
    token: [token, setToken],
    logged: [logged, setLogged],
  };

  if (userData.logged[0] === true) {
    return (
      <div>
        <BaseData.Provider value={userData}>
          <Welcome />
        </BaseData.Provider>
      </div>
    );
  } else {
    return (
      <div>
        <BaseData.Provider value={userData}>
          <Form />
        </BaseData.Provider>
      </div>
    );
  }
}

export default Home;
