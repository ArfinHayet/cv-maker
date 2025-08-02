import Titles from './title.js'
function Socialbar({icon,templates,theme}){
	return(
	  <div class="bg-white p-2 sundorElm"> 
          

            <Titles templates={templates} titletxt='Socials' icon={<i class="fa fa-globe"></i>} theme={theme}/>
            <div >
              <div>
                {/* <h6><i class={icon}></i><img src={require("../icons/facebook.png")} class="icon"/> /Syed.Arfin.Hayet</h6> */}
                <h6><i class={icon}></i><img src={require("../icons/linkedin.png")} class="icon"/><a href="https://www.linkedin.com/in/Syed-arfin-hayet/">/in/Syed-arfin-hayet</a></h6>
                <h6><i class={icon}></i><img src={require("../icons/github.png")} class="icon"/><a href="http://github.com/ArfinHayet">/ArfinHayet</a></h6>
                
              </div>
              
            </div>

            
          </div>   
  );
}

export default Socialbar