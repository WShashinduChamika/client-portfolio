import Logo from "../../Assets/Logo.png";
import { Link, useLocation } from "react-router-dom";
import "./Info.css";

import Minuri from "../../Assets/Minuri.png";
import flyers from "../../Assets/flyers.png";
import Ai from "../../Assets/Ai.png";
import css from "../../Assets/CSS.png";
import flutter from "../../Assets/Flutter.png";
import html from "../../Assets/HTML.png";
import Java from "../../Assets/Java.png";
import js from "../../Assets/JS.png";
import mongo from "../../Assets/Mongo.png";
import Mysql from "../../Assets/MySql.png";
import PS from "../../Assets/PS.png";
import Reacts from "../../Assets/React.png";
import XD from "../../Assets/Xd.png";
import figma from "../../Assets/figma.png";
import node from "../../Assets/Node.png";
import PHP from "../../Assets/PHP.png";
import Dart from "../../Assets/Dart.png";
import Firebase from "../../Assets/Firebase.png";
import Me from "../../Assets/Me.png";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Info() {
  const location = useLocation();
  // Get the current location

  // Determine the active section based on the current URL path
  const isWorkPage = location.pathname === "/Work";
  const isInfoPage = location.pathname === "/Info";

  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    document.title = "Info";
  }, {});
  return (
    <div>
      <div className="section-nav">
        <div className="Navbar">
          <div className="logo-block Navbarfix">
            <img src={Logo} className="logomark" alt="Logo" />
            <div className="LogoText">
              <div className="text-logo">Minuri Senara</div>
              <div className="text-underlogo">Full Stack Developer</div>
            </div>
          </div>

          <div>
            <div className="nav-pill-wrapper">
              {}
              <div class="nav-indicator-glow info"></div>

              <div className="nav-pill">
                {}
                <Link to="/Work" className="nav-toggle work w-inline-block">
                  <div className="text-nav-toggle">Work</div>
                </Link>
                <Link to="/Info" className="nav-toggle w-inline-block">
                  <div className="text-nav-toggle">Info</div>
                </Link>

                <div className="nav-indicator-pill info"></div>
              </div>
            </div>
          </div>

          <div className="nav-pill pil2">
            <div
              className="nav-toggle work w-inline-block "
              onClick={toggleDropdown}
            >
              <div className="text-nav-toggle">@</div>
            </div>
            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div>
                <div
                  className="mobile-popup-menu"
                  style={{
                    display: "flex",
                  }}
                >
                  <a
                    href="https://www.linkedin.com/in/mshewage/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="popup-menu-item w-inline-block"
                  >
                    <div className="text-popup-menu">LinkedIn</div>
                    <img
                      src="https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/644ca61c76573b18898f41f8_icon-open.svg"
                      loading="lazy"
                      alt="LinkedIn icon"
                      className="icon-popup-external"
                    />
                  </a>
                  <a
                    href="https://drive.google.com/file/d/167oQtkvzh5bpspC_XLpRthUL3fq0th1F/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="popup-menu-item w-inline-block"
                  >
                    <div className="text-popup-menu">Resume</div>
                    <img
                      src="https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/644ca61c76573b18898f41f8_icon-open.svg"
                      loading="lazy"
                      alt="Resume icon"
                      className="icon-popup-external"
                    />
                  </a>
                </div>
              </div>
            )}
          </div>

          <div className="nav-right-wrapper">
            <div className="chip-socials-wrapper">
              <a
                href="https://www.linkedin.com/in/mshewage/"
                target="_blank"
                rel="noopener noreferrer"
                className="chip-socials w-inline-block"
              >
                <div className="text-socialnav">LinkedIn</div>
                <img
                  src="https://assets-global.website-files.com/63dcb6e1a80e9454b630f4c4/63e0b50ea0956f4526968ef1_23-icon-external.svg"
                  loading="lazy"
                  alt="External"
                  className="icon-external"
                />
              </a>
              <a
                href="https://drive.google.com/file/d/167oQtkvzh5bpspC_XLpRthUL3fq0th1F/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="chip-socials w-inline-block"
              >
                <div className="text-socialnav">Resume</div>
                <img
                  src="https://assets-global.website-files.com/63dcb6e1a80e9454b630f4c4/63e0b50ea0956f4526968ef1_23-icon-external.svg"
                  loading="lazy"
                  alt="External"
                  className="icon-external"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        class="overline-wrapper"
        initial={{ opacity: 0, y: 50 }} // start with 0 opacity and below the screen
        animate={{ opacity: 1, y: 0 }} // animate to full opacity and original position
        transition={{ duration: 0.8, ease: "easeOut" }} // control speed and easing
      >
        <div class="icon-section-dot"></div>
        <div class="text-projectpage-overline">ABOUT ME</div>
      </motion.div>
      <br />
      <br />
      <motion.div
        class="text-hero info-hero"
        initial={{ opacity: 0, y: 50 }} // start with 0 opacity and below the screen
        animate={{ opacity: 1, y: 0 }} // animate to full opacity and original position
        transition={{ duration: 0.8, ease: "easeOut" }} // control speed and easing
      >
        I am passionate about developing software solutions that inspire and
        elevate
        <span class="text-info-hero-serif"> user experiences.</span>
      </motion.div>

      <motion.div
        className="Aboutpart"
        initial={{ opacity: 0, y: 50 }} // start with 0 opacity and below the screen
        animate={{ opacity: 1, y: 0 }} // animate to full opacity and original position
        transition={{ duration: 1.5, ease: "easeOut" }} // control speed and easing
      >
        <div className="window-outline">
          <div className="Meholder">
            <img src={Me} className="Me" alt="Logo" />
          </div>
        </div>
        <div className="AboutText">
          <div className="AboutText">
            <div className="AboutHead">This is my story </div>
            Hi, I’m Minuri! I'm a passionate software engineer specializing in
            UI/UX design and frontend development. Currently, I’m a third-year
            undergraduate at Sabaragamuwa University of Sri Lanka, where I’m
            pursuing a BSc (Hons) in Software Engineering. <br />
            <br />
            <div className="AboutHead">My background in Design. </div>
            My design journey began in 2019 when I worked as a social media
            marketer. During this time, I discovered my passion for design and
            began selling my creations on Shutterstock. I expanded my work to
            include vector designs, logos, wedding invitations, business cards,
            and other custom designs for clients, offering them through various
            online platforms.Over the past four years, I've gained hands-on
            experience with tools like Illustrator, Photoshop, Figma, and Adobe
            XD, participating in various competitions that have fueled my
            creativity and passion for design.
            <br />
            <br />
            <div className="AboutHead">But, I wanted more.</div>
            <div>
              I realized that my passion extended beyond graphic design—I wanted
              to work in the software industry, creating user-friendly products
              that make a real impact. Rather than focusing solely on design, I
              aimed to combine my skills in both design and development. I pride
              myself on my proficiency in HTML, CSS, Flutter, and React, along
              with programming languages like JavaScript and Dart, which enable
              me to craft intuitive user experiences and build captivating user
              interfaces that solve real-world problems. My focus is now on
              delivering seamless, user-centered products that truly empower the
              end user.
            </div>
            <br />
            <div className="AboutHead">What is My goal ?</div>
            <div>
              My goal is to bridge the gap between design and development,
              crafting intuitive and impactful digital experiences that empower
              users. I aim to deliver user-friendly products that solve
              real-world problems by combining my skills in UI/UX design,
              frontend development, and software engineering.
            </div>
          </div>
        </div>
      </motion.div>

      <div className="GrapicSection">
        <a
          className="Grapicscard"
          href="https://www.behance.net/minurihewage"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="headGrapic">Tech Stack</div>
          <div className="TechStack">
            <img src={html} className="Tech" alt="Logo" />
            <img src={css} className="Tech" alt="Logo" />
            <img src={js} className="Tech" alt="Logo" />
            <img src={node} className="Tech" alt="Logo" />
            <img src={PHP} className="Tech" alt="Logo" />
            <img src={Java} className="Tech" alt="Logo" />
            <img src={Reacts} className="Tech" alt="Logo" />
            <img src={flutter} className="Tech" alt="Logo" />
            <img src={Dart} className="Tech" alt="Logo" />
            <img src={mongo} className="Tech" alt="Logo" />
            <img src={Mysql} className="Tech" alt="Logo" />
            <img src={Firebase} className="Tech" alt="Logo" />
            <img src={XD} className="Tech" alt="Logo" />
            <img src={figma} className="Tech figma" alt="Logo" />
            <img src={PS} className="Tech" alt="Logo" />
            <img src={Ai} className="Tech" alt="Logo" />
          </div>
        </a>
      </div>
      <div
        data-w-id="ee1e9c3e-a1c6-2190-15b3-1daea0409ed7"
        className="section-footer"
      >
        <div className="container-footer">
          <div className="footer-bottom-wrapper">
            <div className="footer-bottom-left">
              <div className="text-footer-copyright">
                © 2024 Minuri Senara. All Rights Reserved.
              </div>
              <div className="text-under-copyright">
                Made with Love and Music (in every note, feel the heat).
              </div>
            </div>
            <div className="footer-bottom-right">
              <div className="text-last-updated">
                {" "}
                Last updated by Minuri on April 15, 2024
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
