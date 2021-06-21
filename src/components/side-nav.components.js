import React,{useState} from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {NavItems} from "../data/nav-item-data.data";
import { Link } from "react-router-dom";
import {IconContext} from 'react-icons';

import './sideNav.css';


const SideNav = () => {

    //const [SideItem, setSideItem] = useState(false)

    //const showSideItem = () => setSideItem(!SideItem)
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
                    })}
                </ul>
            </nav>
        </IconContext.Provider>
        </div>
    );
};

export default SideNav;

/*
import React from "react";
import "./sidenav.css";
import { SidebarData } from "./SidebarData";

function Sidebar() {
  return (
    <div className="Sidebar">
      <ul className="SidebarList">
        {SidebarData.map((val, key) => {
          return (
            <li
              key={key}
              className="row"
              id={window.location.pathname == val.link ? "active" : ""}
              onClick={() => {
                window.location.pathname = val.link;
               
              }}
          

            >
              <div id="icon">{val.icon}</div> <div id="title">{val.title}</div>
               
              


            </li>




          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;





<li key={index} className={item.cName} >
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>


                            <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
*/