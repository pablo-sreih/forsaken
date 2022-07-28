import React from "react";
import Card from "../components/Card";

function Home(props) {
  return (
    <div className="home">
      <div style={{ display: "flex", flexDirection: "row", gap: "50px" }}>
        <Card title="Total Users" info="12" />
        <Card title="Total Posts" info="18" />
      </div>
      <div style={{ display: "flex", flexDirection: "row", gap: "50px" }}>
        <Card title="Total Locations" info="15" />
        <Card title="Highest EMF" info="320" />
      </div>
    </div>
  );
}

export default Home;
