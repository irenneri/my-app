import React from "react";
import "./Weather.css";

export default function Weather() {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn btn-primary" />
            </div>
          </div>
        </form>
        <h1>Kyiv</h1>
        <ul>
          <li>Thursday 15:00</li>
          <li>Sunny</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="sunny"
            />
            19 °C|°F
          </div>
          <div className="col-6">
            <ul>
              <li>Presipitation: 1%</li>
              <li>Humidity: 51%</li>
              <li>Wind: 18 km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
}