import React, { useState } from "react";
import Card from "../components/Card";
import axios from "axios";
import { useEffect } from "react";

function Home(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const array = [];
    axios
      .get(`http://127.0.0.1:8000/api/getCounts`)
      .then((response) => {
        array.push(response.data);
      })
      .then(() => {
        console.log(data);
        setData(array);
      });
  }, []);

  return (
    <div className="home">
      <h1>Statistics</h1>
      <div style={{ display: "flex", flexDirection: "row", gap: "50px" }}>
        <Card title="Total Users" info={data[0].users} />
        <Card title="Total Posts" info={data[0].posts} />
      </div>
      <div style={{ display: "flex", flexDirection: "row", gap: "50px" }}>
        <Card title="Total Locations" info={data[0].locations} />
        <Card title="Highest EMF" info={data[0].high_emf} />
      </div>
    </div>
  );
}

export default Home;
