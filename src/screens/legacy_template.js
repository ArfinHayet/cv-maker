import { useEffect, useState } from "react";
import Header from './templateComponent/header.js'
import Sidebar from './templateComponent/sidebar.js'
import Workbar from './templateComponent/workbar.js'
import Edubar from './templateComponent/edubar.js'
import Projectbar from './templateComponent/projectbar.js'
import Awardbar from './templateComponent/awardbar.js'
import Additional from './templateComponent/additional.js'


//sundor theme//
import Sundorheader from './sundor/header.js'
import Container from './sundor/container.js'

function Template({icon,imgpreview,userinfo,workinfo,wpointList,ppointList,eduinfo,projectlist,templates,theme,adiinfo}){
  
  return (
	<div>

      <table style={{width:'100%'}}>
        <thead>
          <div style={{height:0}} class="onprint"></div>
        </thead>

        <tbody>
          {templates == 1 ? 
      <div class="row">
        <div class="sidebar" style={theme != "" ? {backgroundColor:theme} : {}}>
          <Sidebar icon={icon} imgpreview={imgpreview} theme={theme}/>
        </div>
        <div class="mainbar">
          <Header imgpreview={imgpreview} userinfo={userinfo} templates={templates}/>
          <Additional adiinfo={adiinfo} templates={templates}/>
          <Workbar icon={icon} workinfo={workinfo} wpointList={wpointList} templates={templates}/>
          <Edubar icon={icon} eduinfo={eduinfo} ppointList={ppointList} templates={templates}/>
          <Projectbar icon={icon} projectlist={projectlist} ppointList={ppointList} templates={templates}/>
          <Awardbar icon={icon} templates={templates}/>  
        </div>
      </div> : 
      templates == 2 ?
       <div class="row">
         <div class="mainbartemp2">
            <Header imgpreview={imgpreview} userinfo={userinfo} templates={templates} theme={theme}/>
            <Additional adiinfo={adiinfo} templates={templates} theme={theme}/>
            <Workbar icon={icon} workinfo={workinfo} wpointList={wpointList} templates={templates} theme={theme}/>
            <Edubar icon={icon} eduinfo={eduinfo} ppointList={ppointList} templates={templates} theme={theme}/>
            <Projectbar icon={icon} projectlist={projectlist} ppointList={ppointList} templates={templates} theme={theme}/>
            <Awardbar icon={icon} templates={templates} theme={theme}/>
         </div>
         <div class="sidebartemp2" style={theme != "" ? {backgroundColor:theme} : {}}>
          <Sidebar imgpreview={imgpreview}/>
        </div>
       </div> 
      : 
      templates == 3 ?  
       <div class="row">
          <div class="mainbar" style={{width:'100%',marginLeft:0}}>
              <Header imgpreview={imgpreview} userinfo={userinfo} templates={templates} theme={theme}/>
              <Additional adiinfo={adiinfo} templates={templates} theme={theme}/>
              <Workbar icon={icon} workinfo={workinfo} wpointList={wpointList} templates={templates} theme={theme}/>
              <Edubar icon={icon} eduinfo={eduinfo} ppointList={ppointList} templates={templates} theme={theme}/>
              <Projectbar icon={icon} projectlist={projectlist} ppointList={ppointList} templates={templates} theme={theme}/>
              <Awardbar icon={icon} templates={templates} theme={theme}/>
          </div>
       </div> 
       : 
       templates == 4 ?  
        <div class="mainbar" style={{width:'100%',marginLeft:0}}>
            <Header imgpreview={imgpreview} userinfo={userinfo} templates={templates} theme={theme}/>
            <Additional adiinfo={adiinfo} templates={templates} theme={theme}/>
            <div class="flexbox">
               <Workbar icon={icon} workinfo={workinfo} wpointList={wpointList} templates={templates} theme={theme}/>
               <Edubar icon={icon} eduinfo={eduinfo} ppointList={ppointList} templates={templates} theme={theme}/>
            </div>
            <Projectbar icon={icon} projectlist={projectlist} ppointList={ppointList} templates={templates} theme={theme}/>
            <Awardbar icon={icon} templates={templates} theme={theme}/>
        </div> : 
        templates == 5 ? 

         <div>
            <Container adiinfo={adiinfo} projectlist={projectlist} icon={icon} eduinfo={eduinfo} ppointList={ppointList} workinfo={workinfo} wpointList={wpointList} imgpreview={imgpreview} userinfo={userinfo} templates={templates} theme={theme}/>
         </div>


        : <></>}
        </tbody>
      </table>
      
    </div> 
	);
}

export default Template;