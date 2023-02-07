import axios from 'axios'
import React,{useState,useEffect} from 'react'
import "./ShowBook.css"
import {
 
    Link
      
      } from "react-router-dom";
import BookCard from './BookCard';
export default function ShowBook(){

    let [data,setData]=useState([]);
  

    useEffect(() => {
        const fetchData = async () => {
            let res = await axios.get("http://127.0.0.1:3001/bookdb");
            console.log(res.data);
            setData(res.data)

            // arryay of objects
        }
        fetchData()
    }, [])
    console.log(data);
return(
   
<div>

<div className='showcontainer'>
{

data.length && data.map(i => <BookCard name={i.bookName} author={i.bookAuthor} quantity={i.bookQuantity} id={i.id}></BookCard>)
    
}
  


</div>
</div>

)

}