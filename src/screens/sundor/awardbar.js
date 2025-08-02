import Titles from './title.js'
function Awardbar({icon,templates,theme}){
	return(
	  <div class="bg-white p-2 sundorElm"> 
          

            <Titles templates={templates} titletxt='Awards' icon={<i class="fas fa-award"></i>} theme={theme}/>
            <div >
              <div>
                <h6><i class={icon}></i>Employee Of The Year 2022</h6>
              </div>
              <ul>
                <li>Awarded By - mPair Technologies</li>
              </ul>

              <i class="fa fa-check" style={{'color':'white'}}></i>
            </div>

            <div >
              <div>
                <h6><i class={icon}></i>National Startup Camp top 100 List for House-let (A Startup Co-founded by me)</h6>
              </div>
              <ul>
                <li>Awarded by - Startup Bangladesh</li>
              </ul>

              <i class="fa fa-check" style={{'color':'white'}}></i>
            </div>


            <div >
              <div>
                <h6><i class={icon}></i>Huawei ICT incubator top 30 List for Sowda - Independent Marketplace (A Startup Co-founded by me)</h6>
              </div>
              <ul>
                <li>Awarded by - Huawei inc.</li>
              </ul>

            </div>



            


          </div>   
  );
}

export default Awardbar