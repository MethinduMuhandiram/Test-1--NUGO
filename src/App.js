import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [userData, setUserData] = useState("");

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/1")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUserData(data);
      });
  }, []);
  return (
    <div className="app">
      <div className="card">
        {/* style={{ width: 300, margin: 100, padding: 10 }} */}
        <img src={userData.image} className="card-img-top" alt="userImage" />
        <div className="card-body">
          <h5 className="card-title">{userData.name}</h5>
          <p className="card-text">
            {userData.name} is a {userData.species} from {userData.origin.name}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
