import React from "react";
import { useRef } from "react";
import axios from "axios";

function AddLocation() {
  const name = useRef(null);
  const city = useRef(null);
  const description = useRef(null);
  const latitude = useRef(null);
  const longitude = useRef(null);
  const avg_emf = useRef(null);

  async function addLocation() {
    await axios
      .post("http://127.0.0.1:8000/api/addLocation", {
        name: name.current.value,
        city: city.current.value,
        description: description.current.value,
        latitude: latitude.current.value,
        longitude: longitude.current.value,
        avg_emf_reading: avg_emf.current.value,
      })
      .then((response) => {
        console.log(response);
      });
  }

  return (
    <div className="add-location">
      <h1 style={{ marginBottom: 50 }}>Add Location</h1>
      <div className="input-location">
        <label className="label-location">Location Name</label>
        <input ref={name} className="location-input"></input>
      </div>
      <div className="input-location">
        <label className="label-location">Location City</label>
        <input ref={city} className="location-input"></input>
      </div>
      <div className="input-location">
        <label className="label-location">Location Description</label>
        <textarea ref={description} className="location-input"></textarea>
      </div>
      <div className="input-location">
        <label className="label-location">Latitude</label>
        <input ref={latitude} className="location-input"></input>
      </div>
      <div className="input-location">
        <label className="label-location">Longitude</label>
        <input ref={longitude} className="location-input"></input>
      </div>
      <div className="input-location">
        <label className="label-location">Average EMF</label>
        <input ref={avg_emf} className="location-input"></input>
      </div>

      <button onClick={addLocation} className="location-button" type="submit">
        Submit
      </button>
    </div>
  );
}

export default AddLocation;
