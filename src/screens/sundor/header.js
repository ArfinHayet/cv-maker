function Sundorheader({imgpreview,userinfo,templates,theme}){

	return(
	  <>
	    {userinfo.length == 0 ? ( 
            <div class="sundorHeaderbox d-flex" style={theme != "" ? {backgroundColor:theme} : {}}>
                <div class="sundorimgBox">
                  {imgpreview == '' ? <img width="220" src="https://mpairtech.com/resources/img/arfin.png"/>
                  : <img src={imgpreview} width="200"/>}
                </div> 
              
                <div class="txt-white m-2 p-2">
                  <h3>Syed  Arfin Hayet</h3>
                  <h6>Software Developer</h6>
                  <div><i class="txt-white fa fa-map-marker"></i>Mirpur 1 , Dhaka</div>
                  <div><i class="txt-white fa fa-phone"></i>+8801854652339 , +8801533748448</div>
                  <div><i class="txt-white fa fa-envelope"></i>Arfinhayet786@gmail.com</div>
                  <div><i class="txt-white fa fa-tasks"></i>Industries : OTA, Blockchain Integration, Hospital Erp </div>
                </div>     


            </div>   



          ) : 
          <>
            {userinfo.map(item=>( 
            <div class="sundorHeaderbox d-flex">
                <div class="sundorimgBox">
                  {imgpreview == '' ? <img width="220" src="https://mpairtech.com/resources/img/arfin.png"/>
                  : <img src={imgpreview} width="220"/>}
                </div> 
              
                <div class="txt-white m-2 p-2">
                  <h3>{item.name}</h3>
                  <h6>{item.title}</h6>
                  <div><i class="txt-white fa fa-map-marker"></i>{item.address}</div>
                  <div><i class="txt-white fa fa-phone"></i>{item.phone} <i class="txt-white fa fa-phone"></i>{item.ophone}</div>
                  <div><i class="txt-white fa fa-inbox"></i>{item.email}</div>
                </div>     
            </div>
            ))}
          </>}
	  </>
	);
}

export default Sundorheader