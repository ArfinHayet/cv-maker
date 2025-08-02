import { useEffect, useState } from "react";
function Sidebar({icon,imgpreview,theme}){  
  

  return(
    <div>
          {imgpreview == '' ? <img width="150" src="https://mpairtech.com/resources/img/arfin.png"/> :
          <img src={imgpreview} width="150"/>}
          <div class="skillbox">  
             <h3 style={{'color':'white'}}><i class="fas fa-laptop-code" style={{'color':'white'}}></i>Skill</h3>
             <div class="scon">
                <div class="skills js">Javascript</div>
              </div>
              <div class="scon">
                <div class="skills dart">Dart</div>
              </div>  
              <div class="scon">
                <div class="skills php">Php</div>
              </div>
              <div class="scon">
                <div class="skills mysql">Mysql</div>
              </div>
              <div class="scon">
                <div class="skills mongodb">Mongodb</div>
              </div>
              <div class="scon">
                <div class="skills server">Server Management</div>
              </div>
          </div>

          <div class="skillbox">
            <div><i class="fab fa-linkedin-in"></i>/syed-arfin-hayet</div>
            <div><i class="fab fa-twitter"></i>/syed-arfin-hayet</div>
          </div>
        </div>
  );
}

export default Sidebar;