import React from 'react';
import  './Result.css';

export default function Result({weatherData}) {
    
  return (
    <div className='result'>

      {weatherData.name !== undefined ?
      <>
      <h1 style={{textAlign: "center"}}>{weatherData.name}</h1>
      <div style={{fontWeight:700, display:"flex" , justifyContent:"space-around"}}>
         <div>Max  {weatherData.main.temp_max} &#8451;</div>
         <div>Min  {weatherData.main.temp_min} &#8451;</div>
      </div>
      <div style={{fontWeight:700,display:"flex" , justifyContent:"space-around" , alignItems:"center"}}>
        <div><img src={` https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}></img></div>
        <div>{weatherData.weather[0].main}</div>
      </div>
      </>
       : 
       <>
       <h2>Enter the city name</h2>
       </>
       }
      </div>

    
  )
}
