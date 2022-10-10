import React, { useState } from "react";


interface Props{
    id:number,
    title:string,
    status:string
    onclose:Function,
    updateitem:Function
}

const Editform=({id,title,status,onclose,updateitem}:Props)=>{

  
    const[newtitle,settitle]=useState<string>(title);
    const[newstatus,setstatus]=useState<string>(status);

    const formsubmit=(e:React.FormEvent<HTMLFormElement>)=>{
           e.preventDefault();
           const item={id:id,title:newtitle,status:newstatus};
           updateitem(item);

    }
    
    const titlechange=(e:React.ChangeEvent<HTMLInputElement>)=>{
           
        settitle(e.target.value);
       
            
    }

    const statuschange=(e:React.ChangeEvent<HTMLSelectElement>)=>{
               setstatus(e.target.value);
            
    }

    return(
        <div className='editsection'>
        <form onSubmit={formsubmit} className='editform'>
               <div className='inputcontrol'>
                   <label htmlFor="title">Title</label>
                   <input value={newtitle} id="title" onChange={titlechange} style={{color:"black"}} required/>
               </div>
               <div className='inputcontrol'>
                   <label htmlFor='status' style={{marginBottom:"10px"}}>Status</label>
                   <select value={newstatus} id="status" style={{fontSize:"15px"}} onChange={statuschange}>
                       <option>pending</option>
                       <option>completed</option>
                   </select>
                </div>
                <button type="submit" className='update'>Update</button>
                <button className='close' onClick={()=>onclose()}>Close</button>
        </form>
   </div>
    )
}

export default Editform;