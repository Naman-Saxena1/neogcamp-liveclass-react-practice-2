import axios from "axios";
import React, { useState } from "react";
import "./styles.css";

export default function App() {
  let [data, setData] = useState([]);

  async function onClickHandler() {
    let response = await axios.get("/api/users");
    console.log("Response : ", response.data.users);
    setData(response.data.users);
  }

  return (
    <div className="App">
      <h1> Data </h1>
      <button onClick={onClickHandler}> Click to load data from server </button>
      <ol>
        {data.map((item) => (
          <li>{item.name}</li>
        ))}
      </ol>
    </div>
  );
}
