import React from "react";

export default function Card(props) {
  return (
    <div className="card-container">
      <h2>{props.title}</h2>
      <div className="card-info">
        <h3>{props.info}</h3>
      </div>
    </div>
  );
}
