import Axios from 'axios'
import React,{useState} from 'react'
import "./AddBook.css"
import {
 
    Link
      
      } from "react-router-dom";
export default function AddBook(){

    let [data,setData]=useState({});
    let [msg,setMsg]=useState('');

    const handleChange = (e) => {
      
        setData({
          ...data,
          [e.target.name] : e.target.value
        })
        
    }
    console.log(data)

    async function sendData(){
      let res=await Axios.post("http://127.0.0.1:3001/bookdb",data)
      setMsg(res.data)
      console.log(res.data)

    }

return(
   

<div>
<div> <h2 className='title'>Welcome to Amadeus library</h2></div>
<div class="container">
<div class="container-center">
  <h1>Add Book Info</h1>
  <form>
    <div className="formfield">
      <input type="text" required="required" placeholder='Book Name' name="bookName" onChange={handleChange}/>
      
    </div>
    <div className="formfield">
      <input type="text" required="required" placeholder='Book Author' name="bookAuthor" onChange={handleChange}/>
     
    </div>
    <div className="formfield">
      <input type="text" required="required" placeholder='Book Quantity' name="bookQuantity" onChange={handleChange}/>
     
    </div>

    <div className="formfield">
      <input type="button" value="Add Book" onClick={sendData}/>
    </div>
    <div>  
    <h4>{msg}</h4>
    </div>

  </form>

  <Link to="/showbook">
            <div className="formfield">
      <input type="button" value="View - Edit - Delete Book Information" />
    </div>
            </Link>
            <Link to="/searchBook">
            <div className="formfield">
      <input type="button" value="Search Book" />
    </div>
            </Link>
</div>
  
</div>

</div>

)

}