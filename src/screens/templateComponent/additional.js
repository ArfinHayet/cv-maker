import Titles from './title.js'
import { useEffect, useState } from "react";
function Additional({adiinfo,templates,theme}){

	return(
		<div class="education"> 

		 <Titles templates={templates} titletxt='Additional Info' icon={<i class="fa-solid fa-circle-info"></i>} theme={theme}/>
		 
		    <div class="timeline">

		     {adiinfo.length == 0 ?
		        <>
	                <ul>
	                   <li>
	                     <div class="d-flex justify-content-between" style={{width:'100%'}}>
	                       <div class="w-25 text-left">Marital Status -</div>  <div class="w-75 text-left">Unmarried</div>
	                     </div>  
	                    </li>
	                   <li>
	                     <div class="d-flex justify-content-between" style={{width:'100%'}}>
	                       <div class="w-25 text-left">Nationality -</div>  <div class="w-75 text-left">Bangladeshi</div>
	                     </div> 
	                   </li>
	                   <li>
	                     <div class="d-flex justify-content-between" style={{width:'100%'}}>
	                       <div class="w-25 text-left">Language -</div>  <div class="w-75 text-left">Bangla(Fluent), English(Conversational)</div>
	                     </div> 
	                   </li>
	                   <li>
	                     <div class="d-flex justify-content-between" style={{width:'100%'}}>
	                       <div class="w-25 text-left">Date of Birth -</div>  <div class="w-75 text-left">31st august 1997</div>
	                     </div> 
	                   </li>
	                </ul>
	                <i class="fa fa-check" style={{'color':'white'}}></i>
	            </>
		     : 
		     <>
		        {adiinfo.map(item=>(
			 	<>
	                <ul>
	                   <li>
	                     <div class="d-flex justify-content-between" style={{width:'100%'}}>
	                       <div class="w-25 text-left">Marital Status -</div>  <div class="w-75 text-left">{item.mstatus}</div>
	                     </div>  
	                    </li>
	                   <li>
	                     <div class="d-flex justify-content-between" style={{width:'100%'}}>
	                       <div class="w-25 text-left">Nationality -</div>  <div class="w-75 text-left">{item.national}</div>
	                     </div> 
	                   </li>
	                   <li>
	                     <div class="d-flex justify-content-between" style={{width:'100%'}}>
	                       <div class="w-25 text-left">Language -</div>  <div class="w-75 text-left">{item.language}</div>
	                     </div> 
	                   </li>
	                   <li>
	                     <div class="d-flex justify-content-between" style={{width:'100%'}}>
	                       <div class="w-25 text-left">Date of Birth -</div>  <div class="w-75 text-left">{item.bdate}</div>
	                     </div> 
	                   </li>
	                </ul>
	                <i class="fa fa-check" style={{'color':'white'}}></i>
	            </>
			    ))}
		     </>}
			 
		    </div>
		</div>
	);
}

export default Additional;