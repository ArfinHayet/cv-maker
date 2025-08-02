import { useEffect, useState } from "react";
function Userfield({setUserinfo,setActiveTab,setImagepreview,imgpreview}){


	const [name,setName] = useState('Syed Arfin Hayet');
	const [title,setTitle] = useState('Software Developer');
	const [address,setAddress] = useState('Greenview R/A, Chittagong Bangladesh');
	const [email,setEmail] = useState('Arfinhayet786@gmail.com');
	const [phone,setPhone] = useState('+8801854652339');
	const [ophone,setOphone] = useState('+8801533748448');


	function handleSubmit(){
       

       if(imgpreview == ""){
	   	return false;
	   }

	   
	   if(name == ""){
	   	return false;
	   }

	   if(title == ""){
	   	return false;
	   }

	   if(address == ""){
	   	return false;
	   }

	   if(email == ""){
	   	return false;
	   }

	   if(phone == ""){
	   	return false;
	   }

	   if(ophone == ""){
	   	return false;
	   }

	   

       var uinfo = {
       	'name' : name,
       	'title': title,
       	'address': address,
       	'email':email,
       	'phone':phone,
       	'ophone':ophone

       }
       setUserinfo([uinfo])

    }


	return(
		<>

		         <div class="card m-2 p-2">
	              <form id="userfrm">
	              <div class="form-group m-2">
                    
                    <center>
	                  {imgpreview == "" ? <></> : <img src={imgpreview} width="130"/>}
				    </center>
				    <input type="file" onChange={(e)=>{
				    	setImagepreview(URL.createObjectURL(e.target.files[0]))
				    }} class={imgpreview == "" ? "form-control border-danger" : "form-control"} placeholder="Name"/>
				  </div>
	              <div class="form-group m-2">
				    <input value={name} type="text" onChange={(e)=>{
				    	setName(e.target.value)
				    }} class={name == "" ? "form-control border-danger" : "form-control"} placeholder="Name"/>
				  </div>
				  <div class="form-group m-2">
				    <input value={title} type="text" onChange={(e)=>{
				    	setTitle(e.target.value)
				    }} class={title == "" ? "form-control border-danger" : "form-control"} placeholder="Title"/>
				  </div>
				  <div class="form-group m-2">
				    <input value={phone} type="text" onChange={(e)=>{
				    	setPhone(e.target.value)
				    }} class={phone == "" ? "form-control border-danger" : "form-control"} placeholder="Phone"/>
				  </div>
				  <div class="form-group m-2">
				    <input value={ophone} type="text" onChange={(e)=>{
				    	setOphone(e.target.value)
				    }} class={ophone == "" ? "form-control border-danger" : "form-control"} placeholder="Phone 2"/>
				  </div>
				  <div class="form-group m-2">
				    <input value={email} type="text" onChange={(e)=>{
				    	setEmail(e.target.value)
				    }} class={email == "" ? "form-control border-danger" : "form-control"} placeholder="Email"/>
				  </div>
				  <div class="form-group m-2">
				    <textarea value={address} type="text" onChange={(e)=>{
				    	setAddress(e.target.value)
				    }} class={address == "" ? "form-control border-danger" : "form-control"} placeholder="Address"/>
				  </div>
				  </form>
				  <br/>
				  <button onClick={()=>{
				  	handleSubmit();
				  }} class="btn btn-primary m-2">Save</button>
				  <button onClick={()=>{
				  	// setActiveTab('work');
				  	setActiveTab('addition');
				  	document.getElementById("userfrm").reset();
				  }} class="btn btn-warning m-2" style={{marginLeft:5}}>Next</button>
				 </div>
	         </>
   );
}

export default Userfield;