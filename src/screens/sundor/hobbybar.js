import Titles from './title.js'
function Hobbybar({icon,templates,theme}){
	return(
	  <div class="bg-white p-2 sundorElm"> 
          

            <Titles templates={templates} titletxt='Extracurricular Activities' icon={<i class="fa fa-plus"></i>} theme={theme}/>
            <div >
              <div>
                <h6><i class={icon}></i>Learning New Tech</h6>
                <h6><i class={icon}></i>Reading Books</h6>
                <h6><i class={icon}></i>Traveling</h6>
                <h6><i class={icon}></i>Software Testing</h6>
              </div>           
            </div>


            
            
          </div>   
  );
}

export default Hobbybar