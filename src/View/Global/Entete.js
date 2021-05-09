import logo from '../Blog/GirlPower.svg';
import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Blog from "../Blog/Blog"
import AjouterBlog from "../Blog/AjouterBlog"
import Menu from "../Blog/Menu"

function Entete(){
    return(
      <div class="hero-head">
      <header class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <a href="#Menu" class="navbar-item headerLogo">
              <img src={logo} alt="Logo"/>
            </a>
            <span class="navbar-burger" data-target="navbarMenuHeroC">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          {/* <div id="navbarMenuHeroC" class="navbar-menu"> */}
            <div id="navbarMenuHeroC" class="navbar-end navbar-menu">
              <a href="#Blog" class="navbar-item " title="Blog">
                Blog
              </a>
              <a href="#Exemples" class="navbar-item" title="Examples">
                Exemples
              </a>
              <a href="#Documentation" class="navbar-item" title="Documentation">
                Documentation
              </a>
              <a href="#AjouterBlog" class="navbar-item" title="Formulaire">
                Formulaire
              </a>
            </div>
        </div>
      </header>
    </div>
    )
}
export default Entete