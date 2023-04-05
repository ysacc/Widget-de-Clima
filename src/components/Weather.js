import React from "react";

function Weather({ data }) {
  return (
    <div className="weather__info">
      {data.city && data.country && (
        <p className='weather__key'>
          Location:{" "}
          <span className='weather__value'>
             {data.city}, {data.country}
          </span>
        </p>
      )}
      {data.temperature && (
        <p className='weather__key'>
          Temperature: <span className='weather__value'> {data.temperature}°C</span>
        </p>
      )}
      {data.humidity && (
        <p className='weather__key'>
          Humidity: <span className='weather__value'> {data.humidity}</span>
        </p>
      )}
      {data.description && (
        <p className='weather__key'>
          Conditions: <span className='weather__value'> {data.description}</span>
        </p>
      )}
      <p className='weather__key'>{data.error}</p>
    </div>
  );
}

export default Weather;