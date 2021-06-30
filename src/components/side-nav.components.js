import React,{useState} from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {NavItems} from "../data/nav-item-data.data";
import { Link } from "react-router-dom";
import {IconContext} from 'react-icons';

import './sideNav.css';


const SideNav = () => {

    const [SideItem, setSideItem] = useState(true)

    const showSideItem = () => setSideItem(!SideItem)

    return (
        <div className="sidenavbarContainere">
        <IconContext.Provider value={{color: '#fff'}}>
            <div className="navbar sidenavbarCss">
                <Link to="#" className='menu-bars'>
                    <FaIcons.FaBars color={"white"} onClick={showSideItem} />
                </Link>
                <h2 style={{color:"white",marginLeft:"20px",marginTop:"15px"}}>Menu</h2>
            </div>
            <nav className={SideItem ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSideItem}>
                    <li className='navbar-toggle'>
                        <Link to="#" className='menu-bars'>
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    
                    {NavItems.map((item, index) => {
                        if(localStorage.getItem("role")=="ROLE_ADMIN"){
                            if(!(localStorage.getItem("role")=="ROLE_ADMIN" && item.title=="Contact Admin")){
                                return (
                                  <li key={index} className={item.cName} 
                                  id={window.location.pathname == item.path ? "active" : ""}
                                  onClick={() => {
                                    window.location.pathname =item.path;
                                    
                                  }} >
                                      <div id="icon" >{item.icon}</div> <div id="title" className={item.cName}>{item.title}</div>
                                  </li>
                                )
                              }
                        }else if (localStorage.getItem("role")=="ROLE_CHERCHEUR"){
                            if((localStorage.getItem("role")=="ROLE_CHERCHEUR" && item.title=="Liste des utilisateurs")){
                                return (
                                    <li key={index} className={item.cName} 
                                    id={window.location.pathname == item.path ? "active" : ""}
                                    onClick={() => {
                                      window.location.pathname =item.path;
                                      
                                    }} >
                                        <div id="icon" >{item.icon}</div> <div id="title" className={item.cName}>{item.title}</div>
                                    </li>
                                  )
                            }else if((localStorage.getItem("role")=="ROLE_CHERCHEUR" && item.title=="Liste des Interventions")){
                                return (
                                    <li key={index} className={item.cName} 
                                    id={window.location.pathname == item.path ? "active" : ""}
                                    onClick={() => {
                                      window.location.pathname =item.path;
                                      
                                    }} >
                                        <div id="icon" >{item.icon}</div> <div id="title" className={item.cName}>{item.title}</div>
                                    </li>
                                  )
                            }else if((localStorage.getItem("role")=="ROLE_CHERCHEUR" && item.title=="Messages Staff")){
                                return (
                                    <li key={index} className={item.cName} 
                                    id={window.location.pathname == item.path ? "active" : ""}
                                    onClick={() => {
                                      window.location.pathname =item.path;
                                      
                                    }} >
                                        <div id="icon" >{item.icon}</div> <div id="title" className={item.cName}>{item.title}</div>
                                    </li>
                                  )
                            }else if((localStorage.getItem("role")=="ROLE_CHERCHEUR" && item.title=="Liste des  Plantes")){
                                return (
                                    <li key={index} className={item.cName} 
                                    id={window.location.pathname == item.path ? "active" : ""}
                                    onClick={() => {
                                      window.location.pathname =item.path;
                                      
                                    }} >
                                        <div id="icon" >{item.icon}</div> <div id="title" className={item.cName}>{item.title}</div>
                                    </li>
                                  )
                            }else if((localStorage.getItem("role")=="ROLE_CHERCHEUR" && item.title=="Ajouter Plante")){
                                return (
                                    <li key={index} className={item.cName} 
                                    id={window.location.pathname == item.path ? "active" : ""}
                                    onClick={() => {
                                      window.location.pathname =item.path;
                                      
                                    }} >
                                        <div id="icon" >{item.icon}</div> <div id="title" className={item.cName}>{item.title}</div>
                                    </li>
                                  )
                            }else if((localStorage.getItem("role")=="ROLE_CHERCHEUR" && item.title=="Messages User")){
                                return (
                                    <li key={index} className={item.cName} 
                                    id={window.location.pathname == item.path ? "active" : ""}
                                    onClick={() => {
                                      window.location.pathname =item.path;
                                      
                                    }} >
                                        <div id="icon" >{item.icon}</div> <div id="title" className={item.cName}>{item.title}</div>
                                    </li>
                                  )
                            }
                            else if((localStorage.getItem("role")=="ROLE_CHERCHEUR" && item.title=="Contacter Staff")){
                                return (
                                    <li key={index} className={item.cName} 
                                    id={window.location.pathname == item.path ? "active" : ""}
                                    onClick={() => {
                                      window.location.pathname =item.path;
                                      
                                    }} >
                                        <div id="icon" >{item.icon}</div> <div id="title" className={item.cName}>{item.title}</div>
                                    </li>
                                  )
                            }else if((localStorage.getItem("role")=="ROLE_CHERCHEUR" && item.title=="Contacter User")){
                              return (
                                  <li key={index} className={item.cName} 
                                  id={window.location.pathname == item.path ? "active" : ""}
                                  onClick={() => {
                                    window.location.pathname =item.path;
                                    
                                  }} >
                                      <div id="icon" >{item.icon}</div> <div id="title" className={item.cName}>{item.title}</div>
                                  </li>
                                )
                          }
                        }else if(localStorage.getItem("role")=="ROLE_ADMINMET"){
                            if((localStorage.getItem("role")=="ROLE_ADMINMET" && item.title=="Liste des demandes")){
                                return (
                                    <li key={index} className={item.cName} 
                                    id={window.location.pathname == item.path ? "active" : ""}
                                    onClick={() => {
                                      window.location.pathname =item.path;
                                      
                                    }} >
                                        <div id="icon" >{item.icon}</div> <div id="title" className={item.cName}>{item.title}</div>
                                    </li>
                                  )
                            }else   if((localStorage.getItem("role")=="ROLE_ADMINMET" && item.title=="Liste des utilisateurs")){
                                return (
                                    <li key={index} className={item.cName} 
                                    id={window.location.pathname == item.path ? "active" : ""}
                                    onClick={() => {
                                      window.location.pathname =item.path;
                                      
                                    }} >
                                        <div id="icon" >{item.icon}</div> <div id="title" className={item.cName}>{item.title}</div>
                                    </li>
                                  )
                            }else  if((localStorage.getItem("role")=="ROLE_ADMINMET" && item.title=="Liste des visites")){
                                return (
                                    <li key={index} className={item.cName} 
                                    id={window.location.pathname == item.path ? "active" : ""}
                                    onClick={() => {
                                      window.location.pathname =item.path;
                                      
                                    }} >
                                        <div id="icon" >{item.icon}</div> <div id="title" className={item.cName}>{item.title}</div>
                                    </li>
                                  )
                            }else  if((localStorage.getItem("role")=="ROLE_ADMINMET" && item.title=="Ajouter Visite")){
                                return (
                                    <li key={index} className={item.cName} 
                                    id={window.location.pathname == item.path ? "active" : ""}
                                    onClick={() => {
                                      window.location.pathname =item.path;
                                      
                                    }} >
                                        <div id="icon" >{item.icon}</div> <div id="title" className={item.cName}>{item.title}</div>
                                    </li>
                                  )
                            }else  if((localStorage.getItem("role")=="ROLE_ADMINMET" && item.title=="Liste des visites")){
                                return (
                                    <li key={index} className={item.cName} 
                                    id={window.location.pathname == item.path ? "active" : ""}
                                    onClick={() => {
                                      window.location.pathname =item.path;
                                      
                                    }} >
                                        <div id="icon" >{item.icon}</div> <div id="title" className={item.cName}>{item.title}</div>
                                    </li>
                                  )
                            }
                            
                            
                            else  if((localStorage.getItem("role")=="ROLE_ADMINMET" && item.title=="Messages Staff")){
                                return (
                                    <li key={index} className={item.cName} 
                                    id={window.location.pathname == item.path ? "active" : ""}
                                    onClick={() => {
                                      window.location.pathname =item.path;
                                      
                                    }} >
                                        <div id="icon" >{item.icon}</div> <div id="title" className={item.cName}>{item.title}</div>
                                    </li>
                                  )
                            }else  if((localStorage.getItem("role")=="ROLE_ADMINMET" && item.title=="Messages User")){
                                return (
                                    <li key={index} className={item.cName} 
                                    id={window.location.pathname == item.path ? "active" : ""}
                                    onClick={() => {
                                      window.location.pathname =item.path;
                                      
                                    }} >
                                        <div id="icon" >{item.icon}</div> <div id="title" className={item.cName}>{item.title}</div>
                                    </li>
                                  )
                            }else  if((localStorage.getItem("role")=="ROLE_ADMINMET" && item.title=="Contacter User")){
                                return (
                                    <li key={index} className={item.cName} 
                                    id={window.location.pathname == item.path ? "active" : ""}
                                    onClick={() => {
                                      window.location.pathname =item.path;
                                      
                                    }} >
                                        <div id="icon" >{item.icon}</div> <div id="title" className={item.cName}>{item.title}</div>
                                    </li>
                                  )
                            }
                            else  if((localStorage.getItem("role")=="ROLE_ADMINMET" && item.title=="Contacter Staff")){
                                return (
                                    <li key={index} className={item.cName} 
                                    id={window.location.pathname == item.path ? "active" : ""}
                                    onClick={() => {
                                      window.location.pathname =item.path;
                                      
                                    }} >
                                        <div id="icon" >{item.icon}</div> <div id="title" className={item.cName}>{item.title}</div>
                                    </li>
                                  )
                            }
                        }else{
                          if((localStorage.getItem("role")=="ROLE_USER" && item.title=="Contacter Staff")){
                            return (
                                <li key={index} className={item.cName} 
                                id={window.location.pathname == item.path ? "active" : ""}
                                onClick={() => {
                                  window.location.pathname =item.path;
                                  
                                }} >
                                    <div id="icon" >{item.icon}</div> <div id="title" className={item.cName}>{item.title}</div>
                                </li>
                              )
                        }else  if((localStorage.getItem("role")=="ROLE_USER" && item.title=="Messages Staff")){
                        return (
                            <li key={index} className={item.cName} 
                            id={window.location.pathname == item.path ? "active" : ""}
                            onClick={() => {
                              window.location.pathname =item.path;
                              
                            }} >
                                <div id="icon" >{item.icon}</div> <div id="title" className={item.cName}>{item.title}</div>
                            </li>
                          )
                    }else  if((localStorage.getItem("role")=="ROLE_USER" && item.title=="Messages User")){
                      return (
                          <li key={index} className={item.cName} 
                          id={window.location.pathname == item.path ? "active" : ""}
                          onClick={() => {
                            window.location.pathname =item.path;
                            
                          }} >
                              <div id="icon" >{item.icon}</div> <div id="title" className={item.cName}>{item.title}</div>
                          </li>
                        )
                  }
                    
                        }
    
                    })}
                </ul>
            </nav>
        </IconContext.Provider>
        </div>
    );
};

export default SideNav;
