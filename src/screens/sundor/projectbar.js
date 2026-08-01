import Titles from './title.js'
function Projectbar({icon,projectlist,ppointList,templates,theme}){
	return(
	  <div class="bg-white p-2 sundorElm"> 
            
            <Titles templates={templates} titletxt='Noteable Projects' icon={<i class="fas fa-project-diagram"></i>} theme={theme}/>

            {projectlist.length == 0? 
            <>
             


             <div>
                <div>
                  <h6><i class={icon}></i>Kijiji - Advertisement Automation tool</h6>
                </div>
                <ul>
                  <li>Client - Kijiji - Buy, Sell & Save with Canada's #1 Local Marketplaces ...</li>
                  <li>Workplace- Prime Tech Solutions Ltd.</li>
                  <li>Link- <a href="https://advertise.kijiji.ca/">https://advertise.kijiji.ca/</a> </li>
                  <li>Technology metrics - React,Nodejs,Mysql, Aws - Cognito, Lamda, Sqs,</li>
                </ul>
              </div>

             <div>
                <div>
                  <h6><i class={icon}></i>OTA - B2C,B2B Client Portal</h6>
                </div>
                <ul>
                  <li>Client - Etryyp(Novoair), BuyTickets, Cosmos Holiday, Flights Nepal Etc.</li>
                  <li>Workplace- Prime Tech Solutions Ltd.</li>
                  <li>Link- <a href="https://www.flightsnepal.com/">Flight Nepal</a> , 
                  <a href="https://etryyp.com/auth/signin">Etryyp(Novoair) , 
                  <a href="https://www.cosmosholiday.com.bd/">Cosmos Holiday</a></a></li>
                  <li>Technology metrics - Angular (Frontend)</li>
                </ul>
              </div>

             


              <div >
                <div>
                  <h6><i class={icon}></i>Doctor appointment system (Web , Mobile application)</h6>
                </div>
                <ul>
                  <li>Client - Parkview Hospital Ltd.</li>
                  <li>Workplace- mPair Technologies Ltd.</li>
                  <li>Link- <a href="http://parkviewappointment.com/">Parkview web</a>, <a href="https://play.google.com/store/apps/details?id=com.appointment.parkview.parkviewappointment&hl=en&gl=US">Mobile App</a></li>
                  <li>Technology metrics - Vue.js, Flutter, node.js</li>
                </ul>

                
              </div>
              <div >
                <div>
                  <h6><i class={icon}></i>Flydocx- Travel Agency Management Software</h6>
                </div>
                <ul>
                  <li>Clients - Approximately Seven Travel Agencies</li>
                  <li>Workplace- mPair Technologies Ltd.</li>
                  <li>Link- <a href="https://flydocx.com/">flydocx.com</a></li>
                  <li>Technology metrics - React.js, Electron, node.js</li>
                </ul>

                
              </div>
              

              {/* <div>
                <div>
                  <h6><i class={icon}></i>Scheduler - manage schedules</h6>
                </div>
                <ul>
                  <li>Personal Project</li>
                  <li>Link- <a href="https://play.google.com/store/apps/details?id=com.arfin.scheduler">https://play.google.com/store/apps/details?id=com.arfin.scheduler/</a></li>
                  <li>Technology metrics - Flutter, sqllite</li>
                </ul>
              </div> */}


              {/* <div>
                <div>
                  <h6><i class={icon}></i>Saint Inu - Crypto fundraiser</h6>
                </div>
                <ul>
                  <li>Client - Saint Inu</li>
                  <li>Workplace- Prime Tech Solutions Ltd.</li>
                  <li>Link- <a href="https://saintfi.live/">https://saintfi/live</a></li>
                  <li>Technology metrics - Solidity, Nodejs, Hardhat</li>
                </ul>
              </div> */}


              <div>
                <div>
                  <h6><i class={icon}></i>IT Phonestore e-commerce site/</h6>
                </div>
                <ul>
                  <li>Client - IT Phonestore </li>
                  <li>Link- <a href="https://itphonestore.com/">IT Phonestore </a></li>
                  <li>Technology metrics - Node.js, React</li>
                </ul>
              </div>



              {/* <div>
                <div>
                  <h6><i class={icon}></i>Project Management Software</h6>
                </div>
                <ul>
                  <li>Client - M Bhuiyan Construction Co. USA</li>
                  <li>Link- <a href="https://mbcc.digital">https://mbcc.digital</a></li>
                  <li> Workplace - mPair Technologies Ltd.</li>
                  <li>Technology metrics - Vue.js, Node.js, Mysql</li>
                </ul>
              </div> */}



            </> : 
            <>
              {projectlist.map(item=>(
                <>
                  <div >
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

                    
                  </div>
                </>
              ))}
            </>}   
          </div>
	);
}

export default Projectbar