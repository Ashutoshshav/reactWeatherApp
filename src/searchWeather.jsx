import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function searchWeather(props) {
        let [city, setCity] = useState("");

        let setInput = (event) => {
                setCity(event.target.value);
        }

        let submit = (event) => {
                props.sendData(city);
                event.preventDefault();
                setCity("");
        }
  return (
    <div>
        <h1>Search Weather</h1>
        <form action="" onSubmit={submit}>
                <TextField id="outlined-basic" label="City" variant="outlined" onChange={setInput} value={city} />
                <br /><br />
                <Button variant="contained" disableElevation type='submit'>
                Search
                </Button>
        </form>
        <br /><br />
    </div>
  )
}