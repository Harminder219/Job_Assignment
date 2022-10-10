import React from 'react';
import "../css/card.css";


interface Props{
    id :number,
    title:string,
    status:string,
    ondelete:Function,
    onedit:Function
}

const Card=({id,title,status,ondelete,onedit}:Props)=>{
    
    var status_color:string="";

    if(status==="pending")
    {
        status_color="red";
    }
    else
    {
        status_color+="green";
    }
    
    return (
      

       
        <div className='card'>
       
         
              <h2 className='title'>{title}</h2>
         
              <p className='status'><b>Status: </b><span className='option' style={{fontWeight:"bold",color:status_color}}>{status}</span></p>
          
            
              <button className='edit' onClick={()=>onedit(id)}>Edit</button>
              <button className='delete' onClick={()=>ondelete(id)}>Delete</button>
           
            
        </div>
     
    ) 
}


export default Card;