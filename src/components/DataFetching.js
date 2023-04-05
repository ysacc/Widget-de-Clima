import React, { useState } from "react";
import Form from "./Form";
import Headings from "./Headings";
import Weather from "./Weather";


function DataFetching() {
  const [data, setData] = useState({});

  const getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const fetch_data = await fetch(
      `https://api.weatherbit.io/v2.0/current?city=${city}&key=${"49911c25b8104eb1aec7c892b8b1691e"}`
    );
    const data = await fetch_data.json();
    if (!data.message) {
      setData({
        temperature: data.temp,
        city: data.city_name,
        country: data.country_code,
        humidity: data.rh,
        // description: data.weather,
        error: undefined
      });
    } else {
      setData({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Not Found"
      });
    }
  };

  return (
    <div>
      <div className="wrapper">
        <div className="main">
            <div className="title-container">
              <Headings />
            </div>
            <div className="form_data-container">
              <Form getWeather={getWeather} />
              <Weather data={data} />
            </div>
          </div>
        </div>
    </div>
  );
}

export default DataFetching;