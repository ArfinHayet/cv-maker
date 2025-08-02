import { useEffect, useState } from "react";
function Projectfeild({setProjectlist,setPname,pname,setActiveTab}){
  return(
    <div>
      <div class="form-group">
        <input onChange={(e)=>{
        	setPname(e.target.value)
        }} type="text" class="form-control" placeholder="Project Name"/>
      </div>

      <button onClick={()=>{
      	var pinfo = {
      		'pname':pname
      	}
      	setProjectlist(oldArray => [...oldArray, pinfo]);
      	setActiveTab('ppoint')
      }} class="btn btn-primary">
       Next
      </button>
    </div>
  )
}

export default Projectfeild