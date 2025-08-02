import Titles from './title.js'
function Workbar({icon,workinfo,wpointList,templates,theme}){
	return(
	 <div class="work">
            <Titles templates={templates} titletxt='Work history' icon={<i class="fa fa-history"></i>} theme={theme}/>
            {workinfo.length == 0 ? 
            <>
              <div class="timeline">
                <div>
                  <h6><i class={icon}></i> Software Developer, mPair Technologies Ltd</h6>
                  10/11/2021 - Present
                </div>

                <ul>
                  <li>Developed and maintain Software Architechture</li>
                  <li>Developed cloud business logic with node.js</li>
                  <li>Developed mobile application with Flutter and React Native</li>
                  <li>Developed Desktop application with Electron</li>
                  <li>Developed Web Front End with React, Vue</li>
                  <li>Maintained CI/CD automations</li>
                </ul>

                <i class={icon} style={{'color':'white'}}></i>
              </div>
              <div class="timeline">
                <div>
                  <h6><i class={icon}></i> Product Developer, Bonik Technologies</h6>
                  10/11/2020 - 01/11/2021
                </div>

                <ul>
                  <li>Developed and maintain mobile application from scratch</li>
                  <li>Worked on CI/CD automations based on Customer feedback</li>
                  <li>Developed financial tools for SME businesses</li>
                </ul>

                <i class="fa fa-check" style={{'color':'white'}}></i>
              </div> 
            </>
            : 
              <>
                {workinfo.map(item=>(
                  <>
                    <div class="timeline">
                      <div>
                        <h6><i class={icon}></i> {item.jtitle}, {item.institution}</h6>
                        {item.jfrom} - {item.jto}
                      </div>

                      
                      <ul>
                      {wpointList.length == 0 ? 
                      <>
                          <li>Developed and maintain Software Architechture</li>
                          <li>Developed cloud business logic with node.js</li>
                          <li>Developed mobile application with Flutter and React Native</li>
                          <li>Developed Desktop application with Electron</li>
                          <li>Developed Web Front End with React, Vue</li>
                          <li>Maintained CI/CD automations</li>
                      </>
                      : 
                      <>  
                        {wpointList.map(point=>{
                          if(point.institution == item.institution){
                            return(
                              <li>{point.point}</li>
                            )
                          }
                        })}

                      </>}
                      </ul>    
                    </div>  
                  </>
                ))}
              </>}
          </div>
   );
}

export default Workbar