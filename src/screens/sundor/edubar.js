import Titles from './title.js'
function Edubar({icon,eduinfo,ppointList,templates,theme}){
	return(
	 <div class="bg-white p-2 sundorElm">

            <Titles templates={templates} titletxt='Education' icon={<i class="fas fa-graduation-cap"></i>} theme={theme}/>

                


                <div>
                  <div>
                    <h6><i class={icon}></i>Post Graduate Diploma - IT, Jahangirnagar University</h6>
                  </div>
                  <ul>
                    <li>Department - Institute of Information Technology(IIT)</li>
                    <li>Ongoing</li>
                  </ul>

                  <i class={icon} style={{'color':'white'}}></i>
                </div>

           
                <div>
                  <div>
                    <h6><i class={icon}></i>B.S.S(Hon's), University Of Chittagong</h6>
                  </div>
                  <ul>
                    <li>Department - Public Administration</li>
                    <li>Graduated in 2022</li>
                  </ul>

                  <i class={icon} style={{'color':'white'}}></i>
                </div>
                {/* <div>
                  <div>
                    <h6><i class={icon}></i>H.S.C, Chittagong Model School & College</h6>
                  </div>
                  <ul>
                    <li>Group - Science</li>
                    <li>Graduated in 2017</li>
                  </ul>

                  
                </div>
                <div>
                  <div>
                    <h6><i class={icon}></i>S.S.C, Nasirabad Govt. Boys High School</h6>
                  </div>
                  <ul>
                    <li>Group - Science</li>
                    <li>Graduated in 2015</li>
                  </ul>

                  
                </div> */}
           
                
          
          </div>
  );
}

export default Edubar