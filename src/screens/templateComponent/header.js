function Header({imgpreview,userinfo,templates,theme}){

  var imgshowList = [3,4];
	return(
	  <>
	    {userinfo.length == 0 ? (
            <div class={templates == 3 ? 'headertemp3' : 'header'} style={theme != "" ? {backgroundColor:theme} : {}}>
              <div>
                <h3>Syed <br/> Arfin Hayet</h3>
                <h6>Software Developer</h6>
              </div> 
              {imgshowList.includes(Number(templates)) ? 
              <div class="contact" style={{top:0}}>
                {imgpreview == '' ? <img width="130" src="https://mpairtech.com/resources/img/arfin.png"/>
                : <img src={imgpreview} width="130"/>}
              </div>
              :<div class="contact">
                <ul class="social">
                  <li><i class="fa fa-map-marker"></i>Greenview R/A, Chittagong Bangladesh</li>
                  <li><i class="fa fa-inbox"></i>Arfinhayet786@gmail.com</li>
                  <li><i class="fa fa-phone"></i>+8801854652339</li>
                  <li><i class="fa fa-phone"></i>+8801533748448</li>
                </ul>
              </div>}
            </div>
          ) : 
          <>
            {userinfo.map(item=>(
            <div class={templates == 3 ? 'headertemp3' : 'header'} style={theme != "" ? {backgroundColor:theme} : {}}>
              <div>
                <h3>{item.name.substring(0,item.name.indexOf(" "))}
                <br/> {item.name.replaceAll(item.name.substring(0,item.name.indexOf(" ")),"")}
                </h3>
                <h6>{item.title}</h6>
              </div>
              {imgshowList.includes(Number(templates)) ? 
                <div class="contact" style={{top:0}}>
                  {imgpreview == '' ? <img width="130" src="https://mpairtech.com/resources/img/arfin.png"/>
                  : <img src={imgpreview} width="130"/>}
                </div>
                 : 
                <div class="contact">
                  <ul class="social">
                    <li><i class="fa fa-map-marker"></i>{item.address}</li>
                    <li><i class="fa fa-inbox"></i>{item.email}</li>
                    <li><i class="fa fa-phone"></i>{item.phone}</li>
                    <li><i class="fa fa-phone"></i>{item.ophone}</li>
                  </ul>
                </div>
              }
            </div>
            ))}
          </>}
	  </>
	);
}

export default Header