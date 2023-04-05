import React from "react";

function Form({ getWeather }) {
  return (
    <form className="form" autoComplete='on' onSubmit={getWeather}>
      <input type="text" name="city" placeholder="City" />
      <button>Fetch</button>
    </form>
  );
}

export default Form;