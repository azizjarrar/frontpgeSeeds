import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as CgIcons from "react-icons/cg";
import * as IoIcons from "react-icons/io";
import * as GiIcons from "react-icons/gi";
import * as BsIcons from "react-icons/bs";
import * as RiIcons from "react-icons/ri";


export const NavItems = [
 
            {title: "List Users", path: "/ListUsers", icon:<CgIcons.CgUserList />, cName: 'nav-text'},

            {title: "Add Staff", path: "/addstaff", icon:<AiIcons.AiOutlineUserAdd />, cName: 'nav-text'},
            {title: "List Staffs", path: "/ListStaffs", icon:<CgIcons.CgUserList />, cName: 'nav-text'},

            {title: "Add Demande", path: "/addDemande", icon: <GiIcons.GiNuclearPlant />, cName: 'nav-text'},
            {title: "List Demandes", path: "ListDemande", icon: <BsIcons.BsListCheck />, cName: 'nav-text'},

            {title: "Add Visite", path: "/addVisite", icon:<IoIcons.IoMdAddCircle />, cName: 'nav-text'},
            {title: "List Visites", path: "/ListVisites", icon:<FaIcons.FaClipboard />, cName: 'nav-text'},
 
            {title: "Add Plante", path: "addPlante", icon:<RiIcons.RiPlantFill />, cName: 'nav-text'},
            {title: "List Plantes", path: "listPlantes", icon: <BsIcons.BsListCheck />, cName: 'nav-text'},
            {title: "List Interventions", path: "listInterventions", icon: <BsIcons.BsListCheck />, cName: 'nav-text'},

            {title: "Contact Admin", path: "#", icon: <IoIcons.IoMdMail />, cName: 'nav-text'},
            {title: "Contact AdminMet", path: "#", icon: <IoIcons.IoMdMail />, cName: 'nav-text'},
            {title: "Contact Chercheur", path: "#", icon: <IoIcons.IoMdMail />, cName: 'nav-text'},
            {title: "Contact User", path: "#", icon: <IoIcons.IoMdMail />, cName: 'nav-text'},
]
