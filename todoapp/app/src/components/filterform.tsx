import "../css/filter.css";

interface Props
{
    checkinput:Function
}

const Filter=({checkinput}:Props)=>{


    const monitorinput=(e:React.ChangeEvent<HTMLInputElement>)=>{
        checkinput(e);   
    }

    return(
        <form className="filterform" >
                   <input id="pending" value="pending" onChange={monitorinput} type="checkbox"/>
                   <label htmlFor="pending">Pending</label>
                   <input id="completed" value="completed" onChange={monitorinput} type="checkbox"/>
                   <label htmlFor="competed">Completed</label>

        </form>
    );

}


export default Filter;