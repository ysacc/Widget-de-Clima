import { useState } from "react";

import styles from "./weatherForm.module.css";

export default function WeatherForm({ onChangeCity }) {
  const [city, setCity] = useState("");

  function handleChange(e) {
    const value = e.target.value;
    if(value !== ""){
      setCity(value)
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
      onChangeCity(city);
    
  }

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <input
        className={styles.input}
        type="text"
        value={city}
        onChange={handleChange}
      />
    </form>
  );
}