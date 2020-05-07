/** @format */

import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import Mailto from "react-protected-mailto";
import "../App.scss";
import findart from "../images/findart.PNG";
import gambeat from "../images/gambeat.PNG";
import jason from "../images/jason.PNG";
import todolist from "../images/todolist.PNG";

const Home = () => {
  const [toggle, setToggle] = useState(true);
  function projectDesplay() {
    const project = document.querySelector(".projects");
    const btn = document.querySelector(".view-projects");
    setToggle(!toggle);
    let newToggle = toggle;
    if (newToggle === true) {
      project.style.cssText = "display:block";
    } else {
      project.style.cssText =
        "display:none; scroll-behavior: smooth;  transition: 0.7s; transition-timing-function: ease-in-out;";
    }
  }
  return (
    <div>
      <div className="header">
        <div className="header-content">
          <div className="header-items">Hi</div>
          <div className="header-items">Nice to meet you, I am </div>
          <div className="header-items name">Aliakwe</div>
          <div className="header-items">
            I build interactive user interface for WEB and MOBILE software{" "}
          </div>
        </div>

        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}>
          <div className="view-projects" onClick={projectDesplay}>
            Projects
          </div>
        </Link>
      </div>
      <div className="projects">
        <div className="myworks">My recent projects</div>
        <div className="box">
          <div className="cards">
            <img src={findart} alt="project" className="cards-image find-art" />
            <div className="content">
              <div className="title">Find Art</div>
              <div className="description">
                This is an art work auction app. Users can sell and bid for
                artwork
              </div>

              <div className="reference">
                <a
                  href="https://github.com/Allenkardic/find-art"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="reference-items">
                  Github
                </a>
                <a
                  href="http://www.bit.ly/find-art"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="reference-items">
                  view project
                </a>
              </div>
            </div>
          </div>
          <div className="cards">
            <img src={gambeat} alt="project" className="cards-image" />
            <div className="content">
              <div className="title">Gambeat</div>
              <div className="description">
                Landing page for an online gaming plateform
              </div>
              <div className="reference">
                <a
                  href="http://goal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="reference-items">
                  Github
                </a>
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="reference-items">
                  view project
                </a>
              </div>
            </div>
          </div>
          <div className="cards ">
            <img src={jason} alt="project" className="cards-image" />
            <div className="content">
              <div className="title">Contact manager</div>
              <div className="description">
                Users can manage there contact log using this application
              </div>
              <div className="reference">
                <a
                  href="https://github.com/Allenkardic/jasonplaceholder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="reference-items">
                  Github
                </a>
                <a
                  href="http://www.bit.ly/contactsmanager"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="reference-items">
                  view project
                </a>
              </div>
            </div>
          </div>
          <div className="cards ">
            <img src={todolist} alt="project" className="cards-image" />
            <div className="content">
              <div className="title">Todos manager</div>
              <div className="description">
                A todo list application. manages schedules based on time
              </div>
              <div className="reference">
                <a
                  href="https://github.com/Allenkardic/todolist"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="reference-items">
                  Github
                </a>
                <a
                  href="http://www.bit.ly/adddons"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="reference-items">
                  view project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* contact me */}
      <div id="contact" className="contact">
        <div className="contact-me">
          <div className="contact-items">
            <a
              href="https://twitter.com/aliakwe1920"
              target="_blank"
              rel="noopener noreferrer"
              className="ref">
              twitter
            </a>
            <a
              href="https://linkedin.com/in/ogie-emmanuel"
              target="_blank"
              rel="noopener noreferrer"
              className="ref">
              linkedIn
            </a>

            <Mailto
              className="ref"
              email="aliakwe10@gmail.com"
              headers={{ subject: "Hi, i am Aliakwe" }}
            />
            <a
              href="https://github.com/Allenkardic"
              target="_blank"
              rel="noopener noreferrer"
              className="ref ref-github">
              github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
