import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

import AuthService from "./services/auth.service";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
/******************************************************/


import ListInterventions from './components/intervention/liste-intervention.components'
import ListPlantes from './components/plante/liste-plante.components'
import AddVisite from './components/visite/add-visite.components';
import Adddemande from './components/demande/add-demande.components'
import Addstaff from './components/staff/add-staff.components'
import Liststaff from './components/staff/liste-staff.components'
import ListUser from './components/user/liste-user.components'
import SideNav from "./components/side-nav.components"
import Particles from 'react-particles-js';
import ListDemande from './components/demande/liste-demande.components'
import ListVisites from './components/visite/liste-visite.components'
import VisitesList from './components/visite/liste-visite.components';
import AddPlante from './components/plante/add-plante.components'
import Contact from './components/contact/contact'
/**************user data****************/
import Demmandeuser from './components/userCheckState/demmande/demmande'
import Intervenetionuser from './components/userCheckState/intervenetion/intervenetion'
import Vistesuser from './components/userCheckState/vistes/vistes'



class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }

  logOut() {
    localStorage.removeItem("role");

    AuthService.logout();
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    return (
      <div className="containerallApp">
        <div className="ParticlesContainer">
        <Particles
             params={{
              "particles": {
              "number": {
              "value": 50
              },
              "size": {
              "value": 2.5
              }
          },
              "interactivity": {
              "events": {
              "onhover": {
               "mode":"push",

              "enable": true,
              "mode": "repulse"
              }
              }
              }
          }}
        />
        </div>
      <div className="login">
        <nav className="navbar navbar-expand navbar-dark bg-white" style={{borderBottom:"1px solid black"}}>
          <Link to={"/"} className="navbar-brand">
            BNG
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>

            {showModeratorBoard && (
              <li className="nav-item">
                <Link to={"/mod"} className="nav-link">
                  Moderator Board
                </Link>
              </li>
            )}

            {showAdminBoard && localStorage.getItem("role")=="ROLE_ADMIN" && (
              <li className="nav-item">
                <Link  className="nav-link">
                  Admin Board
                </Link>
              </li>
            )}


          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
            {  localStorage.getItem("role")!="ROLE_ADMIN"  && <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>}
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  Logout
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Sign In
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav>


      </div>
      {localStorage.getItem("role")=="ROLE_ADMIN"&&<SideNav/>}
      

              <div className="containermt3" style={localStorage.getItem("role")!="ROLE_ADMIN"?{width:"100%",marginLeft:"0px"}:{}}>
              <Switch>
                  <Route exact path={["/", "/home"]} component={Home} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/profile" component={Profile} />
                  {/***************admin****************/}
                  <Route path="/AddStaff" exact component={Addstaff} />
                  <Route path="/ListStaffs" exact component={Liststaff} />
                  <Route path="/ListUsers" exact component={ListUser} />
                  <Route path="/addDemande" exact component={Adddemande} />
                  <Route path="/ListDemande" exact component={ListDemande} />
                  <Route path="/addVisite" component={AddVisite} />
                  <Route path="/ListVisites" component={ListVisites} />
                  <Route path="/visites" exact cmponent={VisitesList} />
                  <Route path="/addPlante" exact component={AddPlante} />
                  <Route path="/listPlantes" exact component={ListPlantes} />
                  <Route path="/listInterventions" exact component={ListInterventions} />
                  {/***************userData****************/}
                  <Route path="/Demmandeuser" exact component={Demmandeuser} />
                  <Route path="/Intervenetionuser" exact component={Intervenetionuser} />
                  <Route path="/Vistesuser" exact component={Vistesuser} />
                  <Route path="/Contact/:title" exact component={Contact} />



              </Switch>
            </div>
            </div>
    );
  }
}

export default App;
