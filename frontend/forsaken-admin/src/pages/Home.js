import React, { useState } from "react";
import Card from "../components/Card";
import axios from "axios";
import { useEffect } from "react";

function Home() {
  const [data, setData] = useState([]);
  const array = [];

  useEffect(() => {
    async function getData() {
      await axios
        .get(`http://127.0.0.1:8000/api/getCounts`)
        .then((response) => {
          array.push(
            response["data"]["users"],
            response["data"]["posts"],
            response["data"]["locations"],
            response["data"]["high_emf"]
          );
        });
      setData(array);
      console.log(array);
    }
    getData();
  }, []);

  return (
    <div className="home">
      <h1>Statistics</h1>
      <div style={{ display: "flex", flexDirection: "row", gap: "50px" }}>
        <Card title="Total Users" info={data[0]} />
        <Card title="Total Posts" info={data[1]} />
      </div>
      <div style={{ display: "flex", flexDirection: "row", gap: "50px" }}>
        <Card title="Total Locations" info={data[2]} />
        <Card title="Highest EMF" info={data[3]} />
      </div>
    </div>
  );
}

export default Home;
