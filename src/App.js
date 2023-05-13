
import { useState } from 'react';
import './App.css';
import Result from './Components/Result';
import Search from './Components/Search';
import axios from 'axios';
function App() {
  const [search, setSearch] = useState('');
  const [weather, setWeather]=useState([]);
  
   
    const searchHandler =(srchValue)=>{
      setSearch(srchValue);
  }

  const searchWeatherHandler=()=>{
       if(search !==''){
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=425046c6b45238d1985fe4dd16530b14&units=metric`)
   .then(
     (res)=>{
       
       setWeather(res.data);
       
     }
  )
   .catch( (err)=>{
   console.log('err' + err);
 })

  }
  
}

  return (
    <div className='main'>
    <div className="App">
       <h2>Weather</h2>
      <Search searchData={search} eventHandler={searchHandler} searchWeather={searchWeatherHandler }></Search> 
      <Result weatherData={weather}></Result>
    </div>
   <div/>
  );
}

export default App;
