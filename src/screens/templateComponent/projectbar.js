import Titles from './title.js'
function Projectbar({icon,projectlist,ppointList,templates,theme}){
	return(
	  <div class="education">
            
            <Titles templates={templates} titletxt='Noteable Projects' icon={<i class="fas fa-project-diagram"></i>} theme={theme}/>

            {projectlist.length == 0? 
            <>
              <div class="timeline">
                <div>
                  <h6><i class={icon}></i>Doctor appointment system (Web , Mobile application)</h6>
                </div>
                <ul>
                  <li>Client - Parkview Hospital Ltd.</li>
                  <li>Workplace- mPair Technologies</li>
                  <li>Link- <a href="http://parkviewappointment.com/">Web portal</a>, <a href="https://play.google.com/store/apps/details?id=com.appointment.parkview.parkviewappointment&hl=en&gl=US">Mobile Application</a></li>
                </ul>

                <i class="fa fa-check" style={{'color':'white'}}></i>
              </div>
              <div class="timeline">
                <div>
                  <h6><i class={icon}></i>Flydocx- Travel Agency Management Software</h6>
                </div>
                <ul>
                  <li>Clients - Approximately Seven Travel Agencies</li>
                  <li>Workplace- mPair Technologies</li>
                  <li>Link- <a href="https://flydocx.com/">flyDox</a></li>
                </ul>

                <i class="fa fa-check" style={{'color':'white'}}></i>
              </div>
              <div class="timeline">
                <div>
                  <h6><i class={icon}></i>Sowda - Independent Marketplace</h6>
                </div>
                <ul>
                  <li>Client - Sowda</li>
                  <li>Link- <a href="https://sowdaapp.com/">Web Portal</a>, <a href="https://play.google.com/store/apps/details?id=com.sowda">Mobile App</a></li>
                </ul>

                <i class="fa fa-check" style={{'color':'white'}}></i>
              </div>
            </> : 
            <>
              {projectlist.map(item=>(
                <>
                  <div class="timeline">
                    <div>
                      <h6><i class={icon}></i>{item.pname}</h6>
                    </div>
                    <ul>
                      {ppointList.map(point=>{
                        if(point.pname == item.pname){
                          return(
                           <li>{point.point}</li>
                          );
                        }
                      })}
                    </ul>

                    <i class="fa fa-check" style={{'color':'white'}}></i>
                  </div>
                </>
              ))}
            </>}   
          </div>
	);
}

export default Projectbar