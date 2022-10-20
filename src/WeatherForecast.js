import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
export default function WeatherForecast(props) {
  function handleResponse(response){
    console.log(response.data);
  }

  let apiKey = "ba5b35ad2b3380f6a704b93e22a01ad4";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
    
  axios.get(apiUrl).then(handleResponse);

  return (
      <div className="WeatherForecast">
        <div className="row">
            <div className="col">
                <div className="WeatherForecast-day">Wed</div>
                <WeatherIcon code="01d" size={36} />
                <div className="WeatherForecast-temperature">
                    <span className="WeatherForecast-temperature-max">19°</span>
                    <span className="WeatherForecast-temperature-min">10°</span>
                </div>
            </div>
        </div>
      </div>
    );
}
