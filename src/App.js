import axios from "axios";
import React, { useState } from "react";
import "./styles.css";

export default function App() {
  let [loader, setLoader] = useState(false);
  let [data, setData] = useState([]);
  let [errorMsg, setErrorMsg] = useState(false);

  async function onClickHandler() {
    setLoader(true);
    try {
      let response = await axios.get("/api/users");
      console.log("This is response", response);
      console.log("Response : ", response.data.users);
      setData(response.data.users);
      setLoader(false);
    } catch (error) {
      setErrorMsg(true);
      setLoader(false);
    }
  }

  return (
    <div className="App">
      {loader ? <h1> Data Loading... </h1> : <h1> Data</h1>}
      <button onClick={onClickHandler}> Click to load data from server </button>
      <ol>
        {data.map((item) => (
          <li>{item.name}</li>
        ))}
      </ol>
      {errorMsg ? <p>Something went wrong! :(</p> : ""}
    </div>
  );
}
