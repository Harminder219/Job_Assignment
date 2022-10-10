import React, { useState } from "react";
import "../css/todoform.css";
import uuid from 'react-uuid';

interface Props
{
    onsaveform:Function
}


const Todoform=(props:Props)=>{

    const[title,settitle]= useState<string>("");
    
    const titlechange=(e:React.ChangeEvent<HTMLInputElement>)=>{
          settitle(e.target.value);
    }  

    const formsubmit=(e:React.FormEvent<HTMLFormElement>)=>{
           e.preventDefault();
           const item={
              id:uuid(),
              title:title,
              status:"pending"
           }
           props.onsaveform(item);
           settitle("");
          
    }
  
    return(

        <form onSubmit={formsubmit}  className="myform">
              
              <div className="inputcontrol">
                  <label htmlFor="title"><b>Title</b></label>
                  <input id="title" type="text" value={title} required onChange={titlechange}/>
              </div>

              <button type="submit" className="taskbtn">Add task</button>

        </form>
    )
}

export default Todoform;