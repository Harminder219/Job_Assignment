import React, { useState } from 'react';
import './App.css';
import Card from './components/card';
import Editform from './components/editform';
import Filter from './components/filterform';
import Todoform from './components/todoform';


export type cardcontent={
  id:number,
  title:string,
  status:string
}

function App() {
   
 

  const[items,setitems]=useState<cardcontent[]>([]);

  const[overlay,setoverlay]=useState<boolean>(false);

  const[id,setid]=useState<number>(0);

  const[title,settitle]=useState<string>("");
  
  const[status,setstatus]=useState<string>("");
 
  const[pendingstate,setpstate]=useState<boolean>(false);
  const[completedstate,setcstate]=useState<boolean>(false);
  

  
  
  const formsaved=(item:cardcontent)=>{
        setitems((prevstate)=>{
          return [item,...prevstate]
        });
    
      
  }

  const deleteitem=(id:number)=>{
     
   
      setitems((prevstate)=>{
           const newitems=prevstate.filter(item=>item.id!==id);  
           return newitems;
      })
    

  }

  const edititem=(id:number)=>
  {
    
    const item=items.find(i=>i.id===id);
    if(item!==undefined)
    {
      setid(id);
      settitle(item.title);
      setstatus(item.status);
      setoverlay(true);
    }
    
   
  }

  const itemupdate=({id,title,status}:cardcontent)=>{
  
      setitems((prevstate)=>{
       const newstate= prevstate.map(ele=>{
            return  ele.id===id ? {id,title,status} : ele
        })
       return newstate;
      
   })

   setoverlay(false);
  
  }

  const formclose=()=>{
    setoverlay(false);
  }

  


  const inputcheck=(e:React.ChangeEvent<HTMLInputElement>)=>{
       if(e.target.value==="pending")
       {
          setpstate(!pendingstate);
       }
       else
       {
          setcstate(!completedstate);
       }
       
       
  }

  var newitems=[];

  if(pendingstate && !completedstate)
  {
     newitems=items.filter(item=>item.status==="pending");
  }

  else if(!pendingstate && completedstate)
  {
    newitems=items.filter(item=>item.status==="completed");
  }

  else
  {
    newitems=items;
  }

  return (
    
      
    <div className="App">
       <h1 style={{textAlign:"center",color:"white"}} >Todo App</h1>
       <Todoform  onsaveform={formsaved}/>
      
       <Filter checkinput={inputcheck}/>
       <div className='container'>
       {
         newitems.map(ele=><Card key={ele.id} id={ele.id} title={ele.title} status={ele.status}  ondelete={deleteitem} onedit={edititem} ></Card>)
       }
       </div>
       
       {
        overlay && <Editform id={id} title={title} status={status} updateitem={itemupdate} onclose={formclose} />
       }
       
    </div>
  
  );
}

export  default App;

