import React from 'react';
import './App.css';
import Profile from './Component/Home/Profile';
import About from './Component/AboutMe/About';
import { Skills } from './Component/Skills/Skills';
import { Project } from './Component/Project/Project';
import { Work } from './Component/Work/Work';
import { Contact } from './Component/Contact/Contact';
import { Footer } from './Component/Footer/Footer';
import {Link} from 'react-scroll';

class App extends React.Component {
  openNav() {
    document.getElementById("myNav").style.width = "100%";
  }

  closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }
  about(){
    document.getElementsByClassName("App").style.width="5%";
  }

  render(){
    return (
      <div className="App">
        <div className="Nav-body">
          <div id="myNav" class="overlay">
            <a href="/" class="closebtn" onClick={this.closeNav}>
            </a>
            <div class="overlay-content">
              <a href=""><Link  to="about" spy={true} smooth={true} onClick={this.closeNav}>About</Link></a>
              <a href="" ><Link  to="skills" spy={true} smooth={true} onClick={this.closeNav}>Skills</Link></a>
              <a href="" ><Link  to="project" spy={true} smooth={true} onClick={this.closeNav}>Projects</Link></a>
              <a href="" ><Link  to="work" spy={true} smooth={true} onClick={this.closeNav}>Work</Link></a>
              <a href="" ><Link  to="contact" spy={true} smooth={true} onClick={this.closeNav}>Contact</Link></a>
            </div>
          </div>
          <i id="btn-opn" class="fa fa-bars" onClick={this.openNav}></i>
        </div>
    
       <Profile/>
       <div id="about"><About/></div>
       <div id="skills"><Skills/></div>
       <div id="project"><Project/></div>
       <div id="work"><Work/></div>
       <div id="contact"><Contact/></div>
       <Footer/>
      </div>
    );
  }
}
export default App;
