import Titles from './title.js'
function Awardbar({icon,templates,theme}){
	return(
	  <div class="education"> 
          

            <Titles templates={templates} titletxt='Awards' icon={<i class="fas fa-award"></i>} theme={theme}/>
            <div class="timeline">
              <div>
                <h6><i class={icon}></i>Employee Of The Year 2022</h6>
              </div>
              <ul>
                <li>Given By - mPair Technologies</li>
              </ul>

              <i class="fa fa-check" style={{'color':'white'}}></i>
            </div>

            <div class="timeline">
              <div>
                <h6><i class={icon}></i>National Startup Camp top 100 List for House-let (A Startup Co-founded by me)</h6>
              </div>
              <ul>
                <li>Given by - Startup Bangladesh</li>
              </ul>

              <i class="fa fa-check" style={{'color':'white'}}></i>
            </div>
          </div>   
  );
}

export default Awardbar