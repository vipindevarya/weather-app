import React,{ useRef } from 'react';
import './Search.css';

export default function Search(props) {
   const searchInput = useRef()
  
  return (
    <div className='srch'>
     <input type='search' value={props.searchData} onChange={()=>props.eventHandler(searchInput.current.value)} ref={searchInput} className='search-input'></input>
     <button onClick={props.searchWeather } className='srch-btn' >Search</button>
    </div>
  )
}
