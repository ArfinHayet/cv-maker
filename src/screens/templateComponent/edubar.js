import Titles from './title.js'
function Edubar({icon,eduinfo,ppointList,templates,theme}){
	return(
	 <div class="education">

            <Titles templates={templates} titletxt='Education' icon={<i class="fas fa-graduation-cap"></i>} theme={theme}/>



            {eduinfo.length == 0 ? 
            <>
                <div class="timeline">
                  <div>
                    <h6><i class={icon}></i>B.S.S(Hon's), University Of Chittagong</h6>
                  </div>
                  <ul>
                    <li>Department - Public Administration</li>
                    <li>Graduated in 01/01/2023</li>
                  </ul>

                  <i class={icon} style={{'color':'white'}}></i>
                </div>
                <div class="timeline">
                  <div>
                    <h6><i class={icon}></i>H.S.C, Chittagong Model College</h6>
                  </div>
                  <ul>
                    <li>Group - Science</li>
                    <li>Graduated in 01/01/2017</li>
                  </ul>

                  <i class="fa fa-check" style={{'color':'white'}}></i>
                </div>
                <div class="timeline">
                  <div>
                    <h6><i class={icon}></i>S.S.C, Nasirabad Govt. Boys High School</h6>
                  </div>
                  <ul>
                    <li>Group - Science</li>
                    <li>Graduated in 01/01/2015</li>
                  </ul>

                  <i class="fa fa-check" style={{'color':'white'}}></i>
                </div>
            </> : 
            <>
                {eduinfo.map(item=>(
                  <div class="timeline">
                    <div>
                      <h6><i class={icon}></i>{item.degree}, {item.eduins}</h6>
                    </div>
                    <ul>

                      <li>{item.department}</li>
                      <li>Graduated in {item.passyear}</li>
                      <li>Cgpa {item.cgpa}</li>
                    </ul>

                    <i class="fa fa-check" style={{'color':'white'}}></i>
                  </div>
                ))}
            </>
          }  
          </div>
  );
}

export default Edubar