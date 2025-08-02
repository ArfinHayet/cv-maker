import { useEffect, useState } from "react";
function Jobpoint({institution,setWpointlist,wpointList,setActiveTab}){

	const [wpoint,setWpoint] = useState('');


	function delPoint(point){
      setWpointlist(wpointList.filter(item=> item.point !== point))
	}
	return(
	            <>   
	              <div>
	                <h3>Write more about your role in {institution}</h3>
	                <div class="d-flex">
						    <input type="text" value={wpoint} onChange={(e)=>{
						    	setWpoint(e.target.value)
						    }} placeholder="Add points here"/>
						    <button onClick={(e)=>{
	                      var wp = {
	                      	'point':wpoint,
	                      	'institution':institution
	                      }
	                      setWpointlist(oldArray => [...oldArray, wp]);
	                      setWpoint('')
						    }} class="btn btn-primary">
						     <i class="fa fa-check"/>
						    </button> 
						  </div>

						  <ul>
			                  {wpointList.map((item,index)=>{
			                  	if(item.institution == institution){
			                  		return (
			                  		  <li>{item.point} <i onClick={()=>{
			                  		  	delPoint(item.point);
			                  		  }} class="fa fa-close"></i></li>
			                  		);
			                  	}
			                  })}
						  </ul>



						  <button onClick={(e)=>{
	                      setActiveTab('work')
						    }} class="btn btn-primary">
						     Add More Work
						    </button>

						  <button onClick={()=>{
                         setActiveTab('education')
						  }} class="btn btn-primary">Next</button>
	              </div>
		         </> 
	)
}

export default Jobpoint