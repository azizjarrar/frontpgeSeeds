import React, { Component } from "react";
import AuthService from "../services/auth.service";
import style from '../styles/profile.module.scss'
import email from './images/email.png'
import group from './images/group.png'
import id from './images/id.png'
import name from './images/name.png'
import seeds from './images/profileMiddel.jpg'
import { Link } from "react-router-dom";

 const Profile =()=> {
  const currentUser = AuthService.getCurrentUser();

  return(
    <div className={style.container}>
      <div className={style.profileContainer}>
        <div className={style.header}>
          <h1>Profile</h1>
        </div>

        <div className={style.userdata}>
            <div className={style.titleContainer}><img src={group}/>{currentUser.roles && currentUser.roles.map((role, index) => <> <h3 key={index}>Role : {role}</h3></>)}</div>
            <div className={style.titleContainer}><img src={email}/><h3>email : {currentUser.email}</h3></div>
            <div className={style.titleContainer}><img src={name}/><h3>userName : {currentUser.username}</h3></div>
            <div className={style.titleContainer}><img src={id}/><h3>id : {currentUser.id}</h3></div>
        </div>
        <div className={style.middelImage}>
            <img src={seeds}/>
        </div>.

          <div className={style.checkData}>



                  <button><Link to="/Vistesuser" style={{textDecoration:"none",color:"white"}}>les vistes</Link></button>
                  <button><Link to="/Demmandeuser" style={{textDecoration:"none",color:"white"}}>les demmande</Link></button>
                  <button><Link to="/Intervenetionuser" style={{textDecoration:"none",color:"white"}}>les intervenetion</Link></button>   
          </div>

      </div>
    </div>
  )
  }
  export default Profile;
