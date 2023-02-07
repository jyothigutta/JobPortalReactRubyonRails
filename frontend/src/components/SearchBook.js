import axios from 'axios'
import React,{useState,useEffect} from 'react'
import "./SearchBook.css"
import Searchbox from "./Searchbox"
import {
 
    Link
      
      } from "react-router-dom";
import BookCard from './BookCard';
export default function SearchBook(){

    let [data,setData]=useState([]);
    let [inputValue,setinputValue] =useState('');
  

    useEffect(() => {
        const fetchData = async () => {
            let res = await axios.get("http://127.0.0.1:3001/bookdb");
            console.log(res.data);
            setData(res.data)
        }
        fetchData()
    }, [])
console.log(data);
console.log(inputValue);
let filterData=data.filter((ele) =>( ele.bookName.toLowerCase() == inputValue.toLowerCase())||(ele.bookAuthor.toLowerCase() == inputValue.toLowerCase()));
console.log(filterData)
return(
   
<div>
    
    <div className="header">
   <div> <h2>Welcome to Amadeus library</h2></div> <br></br>
   </div>
   <div  className="searchfield">
<div><Searchbox setinputValue={setinputValue}/></div>
</div>

<div className='showcontainer'>
{

filterData.length ? filterData.map(i => <BookCard name={i.bookName} author={i.bookAuthor} quantity={i.bookQuantity} id={i.id}></BookCard>)

 : data.length && data.map(i => <BookCard name={i.bookName} author={i.bookAuthor} quantity={i.bookQuantity} id={i.id}></BookCard>)
    
}
</div>
</div>

)

}