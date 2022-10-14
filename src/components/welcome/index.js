import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import BaseData from "../../context/BaseData";

function Welcome() {
  const context = useContext(BaseData);

  const [checked, setChecked] = useState(false);
  const [data, setData] = useState(null);

  async function checkToken() {
    axios
      .get(`${context.baseUrl}/auth/check`, {
        headers: {
          Authorization: `Bearer ${context.token[0]}`,
        },
      })
      .then((res) => {
        setData(res.data);
        setChecked(true);
      });
  }

  useEffect(() => {
    checkToken();
  }, []);

  return (
    <>
      {checked ? (
        <div>
          <p className="WelcomeText">  
            Bienvenido <span>{data.username}!</span> Tu numero de Usuario es: <span>{data.id}</span>{" "}
          </p>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}

export default Welcome;
