import React, { useEffect, useState } from "react";
import "./weather.css";

const Weather = () => {
  const [city, setcity] = useState("");
  const [search, setserch] = useState("");
  const [input, setInput] = useState("");
  const [place, setPlace] = useState("");

  const go = async (e) => {
    e.preventDefault();
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid={80157998bbd26349853fa9a86c3d8cd9}`;
    const response = await fetch(url);
    const resjson = await response.json();
    setcity(resjson.main.temp);
    setPlace(search);
  };

  return (
    <>
      {/* <div>
        <input type="text" />
        <button className="button" onchange={(event) => {}}>
          Enter
        </button>
      </div> */}
      {/* <div class="wrapper"> */}
      <div class="weather">
        <input
          type="text"
          onchange={(event) => {
            setserch(event.target.value);
          }}
        />
        <button class="button" onClick={go}>
          Enter
        </button>
        <div class="city">
          <h1>Pune</h1>
          <h2 class="Location"></h2>
        </div>
        <div class="clearfix"></div>

        <div class="cont">
          <div class="icon">
            <i class="fa fa-sun-o spin glow"></i>
            <i class="fa fa-cloud wind"></i>
            <i class="fa fa-cloud two"></i>
          </div>
          <div class="temp">
            <div class="current">{city}</div>
          </div>
          <div class="clearfix"></div>
          <div class="left">
            <i class="fa fa-angle-left"></i>
          </div>
          {/* <div class="time">
            <p>06/01/2023</p>
          </div> */}
          <div class="right">
            <i class="fa fa-angle-right"></i>
          </div>
        </div>
      </div>
      // {/* </div> */}
    </>
  );
};
export default Weather;
