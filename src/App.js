import React, { useEffect, useState } from "react";
import bg from "../src/assets/background.jpg";

import "bootstrap/dist/css/bootstrap.min.css";
import { ImArrowUp2, ImArrowDown2 } from "react-icons/im";
import { getWeatherData } from "./Components/WeatherServices";
import {
  WiThermometer,
  WiStrongWind,
  WiHumidity,
  WiCelsius,
} from "react-icons/wi";
import "./App.css";

const App = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('saddiqabad');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getWeatherData(city);
      setWeather(data);
      console.log(data);
    };
    fetchData();
  }, [city]);

  const keySearch=(e)=>{
    if(e.keyCode==13)
    {
      setCity(e.currentTarget.value)
    }
  }
  return (
    <div
      className="app"
      style={{
        backgroundImage: `url(${bg})`,
        height: "120vh",
        width: "100vw",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    >
      {weather && (
        <div className="container">
          <section className="row search-bar">
            <input type="text" placeholder="Enter city name..." onKeyDown={keySearch}/>
          </section>
          <section className="row text-center temp">
            <div className="col">
              <h5>{`${weather.name} ,${weather.country}`}</h5>
              <h1>
                <WiThermometer />
                {`${weather.temp}`}<WiCelsius className="celsius" />
              </h1>
              <p style={{ display: "inline" }}>{`${weather.description}`}</p>
              <img src={weather.iconURL} alt="" style={{ width: "100px" }} />
            </div>
          </section>
          <section className="row">
            <div className="col  details">
              <div>
                <h3>
                  <ImArrowDown2 className="icon" />{`${weather.temp_min}`}<WiCelsius className="celsius2"/> 
                </h3>
              </div>
              <div>
                <h3>
                  <ImArrowUp2 className="icon"/>{`${weather.temp_max}`}<WiCelsius className="celsius2"/>
                </h3>
              </div>
              <div>
                <h3>
                  <WiHumidity className="icon" style={{ color: "blue" }} />{weather.humidity}%
                </h3>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default App;
