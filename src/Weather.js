import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    setTemperature(response.data.temperature); 
    setReady(true);
  }
    
 if (ready) { 
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input type="search" placeholder="Enter a city..." className="form-control" 
            autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary w-100" />
          </div>
        </div>
      </form>
      <h1>New York</h1>
      <ul>
        <li>Monday 10:00</li>
        <li>Sunny</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
          <img src="sunny.png" alt="Sunny" className="float-left"/>
        <div className="float-left">  
          <span className="temperature">{Math.round(temperature)}</span>
          <span className="unit">°C</span>
          </div>
          </div>
        </div>
        <div className="col-6"> 
          <ul>
            <li>Humidity: 80%</li>
            <li>Wind: 10 km/h</li> 
            <li>Precipitation: 20%</li>
          </ul>
        </div>
      </div>
    </div>
  );
} else {
  const apiKey = "7da4d2833b785tc382cf9d899bo46033";
  let city = "New York";
  const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}