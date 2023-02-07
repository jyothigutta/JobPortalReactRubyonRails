import Axios from 'axios'
import React,{useState} from 'react'

import {
 
    Link
      
      } from "react-router-dom";

      export default function Searchbox({setinputValue}) {

  function handleChange(e){
    setinputValue(e.target.value)
  }

    return (
        <div>    
      
             <input type="text" placeholder="Search via Name or Author" name="search" onChange={handleChange}/>
     
       </div>
    )
}
