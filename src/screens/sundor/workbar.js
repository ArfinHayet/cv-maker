import Titles from './title'
function Workbar({icon,workinfo,wpointList,templates,theme}){
	return(
		<div class="bg-white p-2 sundorElm">
            <Titles templates={templates} titletxt='Work history' icon={<i class="fa fa-history"></i>} theme={theme}/>
            {workinfo.length === 0 ? 
            <>


                <div>
                  <div>
                    <h6><i class={icon}></i>Mynztrip.com 
                    <br/><span className='txt-grey'>Cube inventure, Banani Dhaka</span></h6>
                    <span className='midHead'>Software Engineer  | 15/04/2026 - Present</span>
                    
                  </div>

                  <ul>
                    <li>Worked in OTA project</li>
                    <li>Worked in OTA Backoffice management system</li>
                    <li>Worked in large scale ERP software</li>
                    
                  </ul>
                </div>



                <div>
                  <div>
                    <h6><i class={icon}></i>Prime Tech Solutions Ltd 
                    <br/><span className='txt-grey'>TK Bhaban, Karwanbazar Dhaka</span></h6>
                    <span className='midHead'>Software Engineer  | 01/02/2023 - 14/04/2026</span>
                    
                  </div>

                  <ul>
                    <li>Worked in advertisement automations project using nodejs , React</li>
                    <li>Worked in blockchain transaction process with node.js</li>
                    <li>Worked in OTA portal with Angular</li>
                    
                  </ul>
                </div>


                <div>
                  <div>
                    <h6><i class={icon}></i> mPair Technologies Ltd 
                    <br/><span className='txt-grey'>Wasa , Chittagong</span></h6>
                    <span className='midHead'>Software Engineer  | 15/07/2022 - 15/01/2023</span>
                  </div>

                  <ul>
                    
                    <li>Developed cloud business logic with node.js</li>
                    <li>Developed Desktop application with Electron</li>
                    <li>Developed Web Front End with React, Vue</li>
                  </ul>
                </div>




                
              <div>


                
                {/* <div>
                  <h6><i class={icon}></i>Bonik Technologies
                  <br/><span className='txt-grey'>Agrabad Chittagong</span> </h6>
                  <span className='midHead'>Product Developer  | 10/11/2021 - 15/01/2023</span>
                </div>

                <ul>
                  <li>Developed and maintain mobile application from scratch</li>
                  <li>Worked on CI/CD automations based on Customer feedback</li>
                  <li>Developed financial tools for SME businesses</li>
                </ul> */}
              </div> 



              {/* <div>
                <div>
                  <h6><i class={icon}></i> Co founder, House-let</h6>
                  1/12/2018 - 01/12/2019
                </div>

                <ul>
                  <li>Developed and maintain Product and business</li>
                  <li>Worked on CI/CD automations based on Customer feedback</li>
                  <li>Developed financial tools for Property owner</li>
                </ul>
              </div>  */}




            </>
            : 
              <>
                {workinfo.map(item=>(
                  <>
                    <div>
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
	)
}

export default Workbar