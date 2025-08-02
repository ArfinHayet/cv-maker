import { useEffect, useState } from "react";
function Educationfield({setEduinfo,setActiveTab}){

	const [degree,setDegree] = useState("")
	const [eduins,setEduins] = useState("")
	const [passyear,setPassyear] = useState("")
	const [department,setDepartment] = useState("")
	const [cgpa,setCgpa] = useState("")


	function saveInfo(){
      var einfo = {
      	'degree':degree,
      	'eduins':eduins,
      	'passyear':passyear,
      	'department':department,
      	'cgpa':cgpa
      }
      setEduinfo(oldArray => [...oldArray, einfo]);
      alert('Saved')
    }

	return(
		<div>
		  <form id="edufrm">
		  <div class="form-group">
		   <input onChange={(e)=>{
		   	setDegree(e.target.value)
		   }} type='text' class="form-control" placeholder="degree"/>
		  </div>
		  <div class="form-group">
		   <input onChange={(e)=>{
		   	setEduins(e.target.value)
		   }} type='text' class="form-control" placeholder="institution"/>
		  </div>
		  <div class="form-group">
		   <label>Graduated in</label>
		   <input onChange={(e)=>{
		   	setPassyear(e.target.value)
		   }} type='date' class="form-control"/>
		  </div>
		  <div class="form-group">
		   <input onChange={(e)=>{
		   	setDepartment(e.target.value)
		   }} type='text' class="form-control" placeholder="Department"/>
		  </div>
		  <div onChange={(e)=>{
		   	setCgpa(e.target.value)
		   }} class="form-group">
		   <input type='text' class="form-control" placeholder="CGPA"/>
		  </div>
		  </form>

		  <button class="btn btn-primary" onClick={()=>{
		  	saveInfo();
		  }}>Save</button>

		  <button class="btn btn-primary" onClick={()=>{
		  	document.getElementById("edufrm").reset();
		  }}>Add More</button>


		  <button class="btn btn-primary" onClick={()=>{
		  	setActiveTab('project')
		  }}>Next</button>


		</div>
	);
}

export default Educationfield;