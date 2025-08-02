import Titles from './title.js'
function Skillbar({icon,templates,theme}){
	return(
		<div class="bg-white p-2 sundorElm">

	        <Titles templates={templates} titletxt='Skills' icon={<i class="fas fa-laptop-code"></i>} theme={theme}/> 
              <div class="scon">
                 <div class="skills js">Javascript</div>
              </div>
	          <div class="scon">
                <div class="skills dart">Dart</div>
              </div>  
              <div class="scon">
                <div class="skills php">Php</div>
              </div>
              {/* <div class="scon">
                <div class="skills mysql">Software Quality Assurance</div>
              </div> */}
              <div class="scon">
                <div class="skills mongodb">Mongodb</div>
              </div>
              <div class="scon">
                <div class="skills server">Mysql</div>
              </div>
	    </div>
	);
}

export default Skillbar;