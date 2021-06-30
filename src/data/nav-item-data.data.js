import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as CgIcons from "react-icons/cg";
import * as IoIcons from "react-icons/io";
import * as GiIcons from "react-icons/gi";
import * as BsIcons from "react-icons/bs";
import * as RiIcons from "react-icons/ri";


export const NavItems = [
 
            {title: "Liste des utilisateurs", path: "/ListUsers", icon:<CgIcons.CgUserList />, cName: 'nav-text'},

            {title: "Ajouter Staff", path: "/addstaff", icon:<AiIcons.AiOutlineUserAdd />, cName: 'nav-text'},
            {title: "Liste des Staffs", path: "/ListStaffs", icon:<CgIcons.CgUserList />, cName: 'nav-text'},

            {title: "Liste des demandes", path: "ListDemande", icon: <BsIcons.BsListCheck />, cName: 'nav-text'},

            {title: "Ajouter Visite", path: "/addVisite", icon:<IoIcons.IoMdAddCircle />, cName: 'nav-text'},
            {title: "Liste des visites", path: "/ListVisites", icon:<FaIcons.FaClipboard />, cName: 'nav-text'},
 
            {title: "Ajouter Plante", path: "addPlante", icon:<RiIcons.RiPlantFill />, cName: 'nav-text'},
            {title: "Liste des  Plantes", path: "listPlantes", icon: <BsIcons.BsListCheck />, cName: 'nav-text'},
            {title: "Liste des Interventions", path: "listInterventions", icon: <BsIcons.BsListCheck />, cName: 'nav-text'},

            {title: "Contacter Staff", path: "/Contact/Staff", icon: <IoIcons.IoMdMail />, cName: 'nav-text'},
            {title: "Contacter User", path: "/Contact/User", icon: <IoIcons.IoMdMail />, cName: 'nav-text'},
            {title: "Messages Staff", path: "/MessagesStaff", icon: <IoIcons.IoMdMail />, cName: 'nav-text'},
            {title: "Messages User", path: "/MessagesUser", icon: <IoIcons.IoMdMail />, cName: 'nav-text'},

]
