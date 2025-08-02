import { useEffect, useState } from "react";
function Projectpoint({pname,setPpointlist,ppointList,setActiveTab}){

	const [ppoint,setPpoint] = useState('');

	function delPoint(point){
		setPpointlist(ppointList.filter(item=> item.point !== point))
	  }

	return(
	            <>   
	              <div>
	                <h3>Write more about your role in {pname}</h3>
	                <div class="d-flex">
						    <input type="text" onChange={(e)=>{
						    	setPpoint(e.target.value)
						    }} placeholder="Add points here"/>
						    <button onClick={(e)=>{
							var wp = {
								'point':ppoint,
								'pname':pname
							}
	                      setPpointlist(oldArray => [...oldArray, wp]);    
						    }} class="btn btn-primary">
						     <i class="fa fa-check"/>
						    </button>
						  </div>

						  <ul>
			                  {ppointList.map(item=>{
			                  	if(item.pname == pname){
			                  		return (
			                  		  <li>{item.point} <i onClick={()=>{
										delPoint(item.point);
									}} class="fa fa-close"></i></li>
			                  		);
			                  	}
			                  })}
						  </ul>



						  <button onClick={(e)=>{
	                      setActiveTab('project')
						    }} class="btn btn-primary">
						     Add More Work
						    </button>

						  <button onClick={()=>{
                         setActiveTab('awards')
						  }} class="btn btn-primary">Next</button>
	              </div>
		         </> 
	)
}

export default Projectpoint