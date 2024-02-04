import React, { useState } from 'react';
import SearchWeather from './searchWeather';
import WeatherInfo from './weatherInfo';

export default function weatherApp() {
  let [city, setCity] = useState("");
  
  let isShow = false;

  let handleCity = (newCity) => {
    isShow = true;
    setCity(newCity);
  }
  return (
    <div>
      <SearchWeather sendData = {handleCity} />
      <WeatherInfo sendCity = {city} sendShow = {isShow}/>
    </div>
  )
}
