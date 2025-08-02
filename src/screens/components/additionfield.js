import { useEffect, useState } from "react";
function Additionfield({setAdiinfo,setActiveTab}){

	const [mstatus,setMstatus] = useState("Unmarried")
	const [national,setNational] = useState("Bangladeshi")
	const [bdate,setBdate] = useState("31st august 1997")
	const [language,setLanguage] = useState("Bangla(Fluent), English(Conversational)")
	


	function saveInfo(){

	  if(mstatus == ""){
	  	return false;
	  }
      
      if(national == ""){
      	return false;
      }

      if(bdate == ""){
      	return false;
      }

      if(language == ""){
      	return false;
      }


      var ainfo = {
      	'mstatus':mstatus,
      	'national':national,
      	'bdate':bdate,
      	'language':language,
      }
      setAdiinfo([ainfo]);

    }

	return(
		<div>

        <div class="card m-2 p-2">
        
		  <form id="edufrm">
		  <div class="form-group m-2">
		   <input onChange={(e)=>{
		   	setMstatus(e.target.value)
		   }} type='text' value={mstatus} class={mstatus == "" ? "form-control border-danger" : "form-control"} placeholder="Marital Status"/>
		  </div>
		  <div class="form-group m-2">
		   <input onChange={(e)=>{
		   	setNational(e.target.value)
		   }} type='text' value={national} class={national == "" ? "form-control border-danger" : "form-control"} placeholder="Nationality"/>
		  </div>
		  <div class="form-group m-2">
		   <input onChange={(e)=>{
		   	setBdate(e.target.value)
		   }} type='text' value={bdate} class={bdate == "" ? "form-control border-danger" : "form-control"} placeholder="Birthdate"/>
		  </div>
		  <div onChange={(e)=>{
		   	setLanguage(e.target.value)
		   }} class="form-group m-2">
		   <input type='text' value={language} class={language == "" ? "form-control border-danger" : "form-control"} placeholder="Languange"/>
		  </div>
		  </form>
          

          <div class="d-flex">


              <button class="btn btn-light w-100 m-2" onClick={()=>{
		  	   setActiveTab('userinfo')
		       }}>Back</button>
            
              <button class="btn btn-primary w-100 m-2" onClick={()=>{
		  	   saveInfo();
		       }}>Save</button>
            

            
               <button class="btn btn-warning w-100 m-2" onClick={()=>{
		  	   setActiveTab('work')
		       }}>Next</button>
            
          </div>

		  

		  




		</div>


		</div>
	);
}

export default Additionfield;