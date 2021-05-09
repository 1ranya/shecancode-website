import './App.css';
import Entete from './View/Global/Entete'
import Footer from './View/Global/Footer';
import Menu from './View/Blog/Menu';
import Blog from './View/Blog/Blog'

import logo from './View/Blog/GirlPower.svg';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AjouterBlog from "./View/Blog/AjouterBlog"
import BlogContent from './View/Blog/BlogContent';

function App() {
  return (
    <section class="App hero is-success is-fullheight">
      <Entete/>
      <br/>
      <Menu/>
      <div className="divSeparateur"></div>
      <br/>
      <Blog/>
      <br/>
      <AjouterBlog/>
      <BlogContent />
      {/* <Footer/> */}
    </section>

  );
}

export default App;
