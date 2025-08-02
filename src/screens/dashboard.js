import { useEffect, useState } from "react";
import Template from './template.js';
import Userfeild from './components/userfeild.js';
import Workfeild from './components/workfeild.js';
import Projectfeild from './components/projectfeild.js';
import Educationfeild from './components/educationfeild.js';
import Additionfield from './components/additionfield.js';
import Jobpoint from './points/jobpoint.js';
import Projectpoint from './points/projectpoint.js';



import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../states/workSlice.js'


function Dashboad(){




   const count = useSelector((state) => state.work.value)
   const dispatch = useDispatch()
  
   const [institution,setInstitution] = useState('mPair Technologies Ltd');
   const [pname,setPname] = useState("");

   const [userinfo,setUserinfo] = useState([]);
   const [workinfo,setWorkinfo] = useState([
   	 // {
   	 // 	'jtitle':'Software Developer',
   	 // 	'institution':'mPair Technologies Ltd',
      // 	'jfrom':'10/11/2021',
      // 	'jto':'Present',
   	 // },
   	 // {
   	 // 	'jtitle':'Product Developer',
   	 // 	'institution':'Bonik Technologies',
      // 	'jfrom':'10/11/2020',
      // 	'jto':'01/11/2021',
   	 // }
   	]);
   const [eduinfo,setEduinfo] = useState([])
   const [adiinfo,setAdiinfo] = useState([])
   const [activeTab,setActiveTab] = useState('userinfo');
    
   const [wpointList,setWpointlist] = useState([]);
   const [ppointList,setPpointlist] = useState([]);
   const [projectlist,setProjectlist] = useState([]);
   const [templates,setTemplates] = useState(1)
   const [theme,setTheme] = useState('')
   const [imgpreview,setImagepreview] = useState('https://mpairtech.com/resources/img/arfin.png')


   const [icon,setIcon] = useState('fa fa-check-circle')

   
	return (
	  <div>






        
	    <div class="onprint">
	       <Template icon={icon} imgpreview={imgpreview} userinfo={userinfo} workinfo={workinfo} wpointList={wpointList} ppointList={ppointList} eduinfo={eduinfo} projectlist={projectlist} templates={templates} theme={theme} adiinfo={adiinfo}/>
	    </div>
       
       <div class="noprint">
	    <div class="row">
	      <div class="col-sm-8" style={{position:'relative',height:600,'overflow':'auto'}}>
	       <Template icon={icon} imgpreview={imgpreview} userinfo={userinfo} workinfo={workinfo} wpointList={wpointList} ppointList={ppointList} eduinfo={eduinfo} projectlist={projectlist} templates={templates} theme={theme} adiinfo={adiinfo}/>
	      </div>

	      <div class="col-sm-4">
             
             

	         <div class="card m-2 p-2">
	             <div class="m-2">
	               <select onChange={(e)=>{
		             	setTemplates(e.target.value)
		             }} class="form-control">
					     <option>Choose Template</option>
					     <option value="1">Template 1</option>
					     <option value="2">Template 2</option>
					     <option value="3">Template 3</option>
					     <option value="4">Template 4</option>
					     <option value="5">Template SUNDOR</option>
			         </select>
	             </div>

	             <div class="m-2 d-flex">
	               <input value={theme} type="color" class="form-control" onChange={(e)=>{
			         	setTheme(e.target.value)
			         }}/>
			         {theme != "" ? <i onClick={()=>{
			         	setTheme('')
			         }} class="fa fa-close btn btn-info"/>: <></>}
	             </div>

	             <div class="m-2">
	               <select onChange={(e)=>{
	               	setIcon(e.target.value)
	               }} class="form-control">
	                 <option>Check Icon</option>
	                 <option value="fa fa-check-circle">Check</option>
	                 <option value="fa fa-trash">Trash</option>
	                 <option value="fa fa-info-circle">Info</option>
	                 <option value="fa fa-arrow-right">Arrow</option>
	                 <option value="fa fa-angle-right">Angle</option>
	               </select>
	             </div>
	         </div>

             

	         {activeTab == 'userinfo' ? 
	         <Userfeild setUserinfo={setUserinfo} setActiveTab={setActiveTab} setImagepreview={setImagepreview} imgpreview={imgpreview}/>
	         : activeTab == 'addition' ?
            <Additionfield setAdiinfo={setAdiinfo} setActiveTab={setActiveTab}/>
	         : activeTab == 'work' ? 
	         <Workfeild setWorkinfo={setWorkinfo} setActiveTab={setActiveTab} institution={institution} setInstitution={setInstitution}/>
	         : activeTab == 'jpoint' ? 
		      <Jobpoint institution={institution} setWpointlist={setWpointlist} wpointList={wpointList} setActiveTab={setActiveTab}/> 
		      : activeTab == 'education' ? 
		      <Educationfeild setEduinfo={setEduinfo} setActiveTab={setActiveTab}/> : 
		      activeTab == 'project' ? 
		      <Projectfeild setProjectlist={setProjectlist} setPname={setPname} pname={pname} setActiveTab={setActiveTab}/> 
		      : activeTab == 'ppoint' ? 
		      <Projectpoint pname={pname} setPpointlist={setPpointlist} ppointList={ppointList} setActiveTab={setActiveTab}/> : <></>}
	          
				 
	      </div>  
	    </div>
	    </div>
         
	    
	  </div>
	);
}

export default Dashboad;