import React from "react";
import { useRef } from "react";

function AddLocation() {
  return (
    <div className="add-location">
      <h1 style={{ marginBottom: 50 }}>Add Location</h1>
      <div className="input-location">
        <label className="label-location">Location Name</label>
        <input className="location-input"></input>
      </div>
      <div className="input-location">
        <label className="label-location">Location City</label>
        <input className="location-input"></input>
      </div>
      <div className="input-location">
        <label className="label-location">Location Description</label>
        <textarea className="location-input"></textarea>
      </div>
      <div className="input-location">
        <label className="label-location">Latitude</label>
        <input className="location-input"></input>
      </div>
      <div className="input-location">
        <label className="label-location">Longitude</label>
        <input className="location-input"></input>
      </div>
      <div className="input-location">
        <label className="label-location">Average EMF</label>
        <input className="location-input"></input>
      </div>

      <button className="location-button" type="submit">
        Submit
      </button>
    </div>
  );
}

export default AddLocation;
