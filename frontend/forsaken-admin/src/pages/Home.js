import React from "react";
import Card from "../components/Card";

function Home(props) {
  return (
    <div className="home">
      <h1>Statistics</h1>
      <div style={{ display: "flex", flexDirection: "row", gap: "50px" }}>
        <Card title="Total Users" info="7" />
        <Card title="Total Posts" info="18" />
      </div>
      <div style={{ display: "flex", flexDirection: "row", gap: "50px" }}>
        <Card title="Total Locations" info="10" />
        <Card title="Highest EMF" info="230" />
      </div>
    </div>
  );
}

export default Home;
