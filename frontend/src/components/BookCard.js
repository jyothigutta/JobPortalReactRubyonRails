import Axios from 'axios'
import React,{useState} from 'react'
import "./BookCard.css"
import {
 
    Link
      
      } from "react-router-dom";
export default function BookCard(props){

  const [visible, setVisible] = useState(false);
  const [update, setUpdate] = useState(true);
  let [msg,setMsg]=useState('');
  let [data,setData]=useState({});

  const handleChange = (e) => {
    
      setData({
        ...data,
        [e.target.name] : e.target.value
      })
      
  }

  console.log(data)

function updateFields(){

  setVisible(true)
  setUpdate(false)

}

async function updateData(){

  

  if (data.bookName === undefined) {
    data.bookName = props.name
  }
   if (data.bookAuthor === undefined) {
    data.bookAuthor = props.author
  }
   if (data.bookQuantity === undefined) {
    data.bookQuantity=props.quantity
  }


  let res=await Axios.put("http://127.0.0.1:3001/bookdb/".concat(props.id),data)
  setMsg(res.data)
  console.log(res.data)

}

    async function sendData(){
        let res=await Axios.delete("http://127.0.0.1:3001/bookdb/".concat(props.id))
        window.location.reload(false);
        console.log(res.data)
  
      }

return(
   


<div className="container-center">
  <h1>Book Detail</h1>
  <form>
  { update && <div>
    <div className="formfield">
      <div>  Name: &nbsp; {props.name} </div>
      
    </div>
    <div className="formfield">
    <div>  Author: &nbsp; {props.author} </div>
     
    </div>
    <div className="formfield">
    <div>  Quantity:  &nbsp; {props.quantity} </div>
     
    </div>
    </div>}


    { visible && <div>
    <div className="formfield">
      <div>  Name: </div>  &nbsp; <div> <input type="text" required="required" placeholder={props.name} name="bookName" onChange={handleChange}/>   </div>
      
    </div>
    <div className="formfield">
    <div>  Author: </div>  &nbsp; <div> <input type="text" required="required" placeholder={props.author} name="bookAuthor" onChange={handleChange}/>   </div>
     
    </div>
    <div className="formfield">
    <div>  Quantity: </div>  &nbsp; <div> <input type="text" required="required" placeholder={props.quantity} name="bookQuantity" onChange={handleChange}/>   </div>
     
    </div>
    </div>
}

    <div className="formfield">
      {update && <div className="button"><input type="button" value="Update Book" onClick={()=>updateFields()}/> </div> }
      { visible && <div className="button"><input type="button" value="Submit" onClick={()=>updateData()}/> </div> }
      <div className="button"><input type="button" value="Delete Book" onClick={()=>sendData()}/> </div>
    </div>

    <div className='formfield'>  
    <h4>{msg}</h4>
    </div>
   

  </form>

</div>

)

}