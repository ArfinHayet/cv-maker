import { useEffect, useState } from "react";

function Workfeild({setWorkinfo,setActiveTab,institution,setInstitution}){ 

	const [jtitle,setJtitle] = useState('Software Developer');
	const [jfrom,setJfrom] = useState('2021-11-10');
	const [jto,setJto] = useState('Present');

	function handleWorkinfo(){

	  if(jtitle == ""){
	  	return false;
	  }

      if(jfrom == ""){
      	return false;
      }

      if(jto == ""){
      	return false;
      }

      var winfo = {
      	'jtitle':jtitle,
      	'institution':institution,
      	'jfrom':jfrom,
      	'jto':jto,
      }
      setWorkinfo(oldArray => [...oldArray, winfo]);
      setActiveTab('jpoint')
    }

	return ( 
	<>

	              <div class="card m-2 p-2">


	              <div class="form-group m-2">
				    <input type="text" value={jtitle} onChange={(e)=>{
				    	setJtitle(e.target.value)
				    }} class={jtitle == "" ? "form-control border-danger" : "form-control"} placeholder="Job Title"/>
				  </div>

				  <div class="form-group m-2">
				    <input type="text" value={institution} onChange={(e)=>{
				    	setInstitution(e.target.value)
				    }} class={institution == "" ? "form-control border-danger" : "form-control"} placeholder="Institution"/>
				  </div>


				  <div class="form-group m-2">
				    <input type="date" value={jfrom} onChange={(e)=>{
				      	setJfrom(e.target.value);
				      }} class={jfrom == "" ? "form-control border-danger" : "form-control"}/>
				  </div>

				  <div class="form-group m-2">    
	                  <div class="form-control">
					    <input style={{marginRight:4}} type="checkbox" value="present" onChange={(e)=>{
				      	setJto(e.target.value); }} checked={jto == 'Present' ? true : false}/>
					        <label>Currently work here</label>
	                  </div> 
				  </div>



				  <div class="form-group m-2">
                      <input type="date" value={jto} onChange={(e)=>{
				      	setJto(e.target.value);
				      }} class={jtitle == "" ? "form-control border-danger" : "form-control"}/>
				  </div>


				  <br/>


                  <div class="d-flex">
						<button class="btn btn-light w-100 m-2" onClick={()=>{
							setActiveTab('addition')
						}}>Back</button>

						<button class="btn btn-primary w-100 m-2" onClick={()=>{
							handleWorkinfo();
						}}>Next</button>	
				  </div>
				  

				  </div> 
	</>
	);
}

export default Workfeild;