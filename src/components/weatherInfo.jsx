import React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function weatherInfo(props) {
        let [weatherList, setWeather] = useState({
                city : undefined,
                weather : undefined,
                feels_like : undefined,
                humidity : undefined,
                pressure : undefined,
                temp : undefined,
                temp_max : undefined,
                temp_min : undefined,
                isShow : false,
        });

        let callAPI = async () => {
                let city = props.sendCity;

                let APIkey = "c877237feab85511b68ab40298bed876";

                let APIurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`;

                let response = await fetch(APIurl);

                if (!response.ok) {
                        throw new Error(`Failed to fetch data. Status: ${response.status}`);
                }

                let result = await response.json();
                setWeather(() => {return {
                        city : result.name,
                        weather : result.weather[0].description,
                        feels_like : result.main.feels_like,
                        humidity : result.main.humidity,
                        pressure : result.main.pressure,
                        temp : result.main.temp,
                        temp_max : result.main.temp_max,
                        temp_min : result.main.temp_min,
                        isShow : true,
                }});
        }

        callAPI();
  return (
    <div>
      {weatherList.isShow == true ? 
        <Card sx={{ minWidth: 275 }}>
        <CardContent>
                <h2>{weatherList.city} Weather</h2>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Weather : {weatherList.weather}
                </Typography>

                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Temperature : {weatherList.temp}&deg;C
                </Typography>

                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Feels like : {weatherList.feels_like}
                </Typography>

                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                humidity : {weatherList.humidity}
                </Typography>

                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Pressure : {weatherList.pressure}
                </Typography>

                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Maximum Tempereture : {weatherList.temp_max}&deg;C
                </Typography>

                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Minimum Tempereture : {weatherList.temp_min}&deg;C
                </Typography>
        </CardContent>
        </Card> : ""  
        }
    </div>
  )
}
