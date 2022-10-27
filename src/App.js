import React, { useState } from "react";
import "./index.css";
import "./App.css"

const App = () => {
  const [users, Setuser] = useState([]);
  const getuser = async () => {
    const response = await fetch("https://reqres.in/api/users?page=1");
    const jsonresponse = await response.json();
    Setuser(jsonresponse.data);
  };
  return (
    <main>
      <style>
        {
          "body{ background: linear-gradient(275deg, #20bf55 0%, #01baef 74%); background-size:100% 100%;"
        }
      </style>
      <div class="header">
        <nav id="head">
          <span id="lgm">LetsGrowMore</span>
          <br></br>

          <button id="button" onClick={getuser}>
            Get Users
          </button>
        </nav>
      </div>
      <div className="data">
        {users.map(({ id, email, first_name, last_name, avatar }) => {
          return (
            <div className="main">
              <div className="profile">
                <div className="details">
                  <img src={avatar} alt="profile"></img>
                  <p className="name">
                    {first_name} {last_name}
                  </p>
                  <p>{email}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default App;
