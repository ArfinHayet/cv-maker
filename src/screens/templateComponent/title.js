function Titles({templates,titletxt,icon,theme}){
	return(
	   <div class={templates == 3 || templates == 4 ? 'titletemp3' : ''} style={(templates == 3 || templates == 4) && theme != "" ? {backgroundColor:theme} : {}}>
            <h4>{icon} {titletxt}</h4>
       </div>
	);
}

export default Titles