import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [userData, setUserData] = useState("");

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/1")
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
      });
  }, []);
  return (
    <div>
      <div style={{ width: 300, margin: "auto", marginTop: "20vh" }}>
        <img src={userData.image} className="card-img-top" alt="userImage" />
        <div className="card-body">
          <h5 className="card-title">{userData.name}</h5>
          <p className="card-text">
            {userData.name} is a {userData.species} from {userData.origin?.name}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
