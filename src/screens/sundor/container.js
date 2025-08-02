import './style.css'
import Sundorheader from './header'
import Workbar from './workbar'
import Edubar from './edubar'
import Projectbar from './projectbar'
import Additional from './additional'
import Awardbar from './awardbar'
import Skillbar from './skillbar'
import Titles from './title.js'
import Hobbybar from './hobbybar.js'
import Socialbar from './socialbar.js'
function Container({adiinfo,projectlist,icon,eduinfo,ppointList,workinfo,wpointList,imgpreview,userinfo,templates,theme}){
	return( 
		<div style={{fontFamily:'Trebuchet MS'}}>
		  <Sundorheader imgpreview={imgpreview} userinfo={userinfo} templates={templates} theme={theme}/>
	          <div class="sundorAddition">
	           <Additional adiinfo={adiinfo} templates={templates} theme={theme}/>
	          </div>
		  <div class="sundorBox">
		    <div class="sundorF1">
		      <Projectbar icon={icon} projectlist={projectlist} ppointList={ppointList} templates={templates} theme={theme}/>
              
			  
			  
			  {/* <Awardbar icon={icon} templates={templates} theme={theme}/> */}
			  {/* <Hobbybar icon={icon} templates={templates} theme={theme}/>
			  <Skillbar icon={icon} templates={templates} theme={theme}/> */}
			  
			  {/* <Socialbar icon={icon} templates={templates} theme={theme}/> */}
		       
			  
			
		    </div>
		    <div class="sundorF2">
		      <Workbar icon={icon} workinfo={workinfo} wpointList={wpointList} templates={templates} theme={theme}/>
		      <Edubar icon={icon} eduinfo={eduinfo} ppointList={ppointList} templates={templates} theme={theme}/>
		    </div>
		  </div>


		  <div class="sundorBox pagebreak">
		    <div class="sundorF1">
		      <Awardbar icon={icon} templates={templates} theme={theme}/>
			  
		    </div>
		    <div class="sundorF2">
		       <Skillbar icon={icon} templates={templates} theme={theme}/>
		    </div>
		  </div>


		  <div class="sundorBox">
		    <div class="sundorF1">
		      <Hobbybar icon={icon} templates={templates} theme={theme}/>
		    </div> 
		    <div class="sundorF2">
		       <Socialbar icon={icon} templates={templates} theme={theme}/>
		    </div>
		  </div>


		  



		</div>
	)
}

export default Container