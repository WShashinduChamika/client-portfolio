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
import webflow from "../../Assets/Webflow.png";
import node from "../../Assets/Node.png";
import PHP from "../../Assets/PHP.png";
import Dart from "../../Assets/Dart.png";
import Firebase from "../../Assets/Firebase.png";
import Me from "../../Assets/Me2.png";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../../Components/Navbar/Navbar";

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
        <Navbar />
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
       “ I’m a product designer who loves creating meaningful products that inspire me and bring excitement to everyone who uses them. ”
        {/* <span class="text-info-hero-serif"> user experiences.</span> */}
      </motion.div>

      <motion.div
        className="Aboutpart"
        initial={{ opacity: 0, y: 50 }} // start with 0 opacity and below the screen
        animate={{ opacity: 1, y: 0 }} // animate to full opacity and original position
        transition={{ duration: 1.5, ease: "easeOut" }} // control speed and easing
      >
       
        <div className="AboutText">
             I’m Minuri. I have experience in design and coding, and I love creating 
             things that are meaningful, not just visually appealing. I care about 
             how people feel when they interact with a design and aim to give users 
             quick, seamless experiences. <br />
            <br />
           
             I’m a software engineering undergraduate with knowledge of the tech industry, 
             and I’m passionate about low-code and no-code tools to bring ideas to life 
             faster and more efficiently. I enjoy exploring user-centered solutions, 
             experimenting with new technologies, and continuously improving my skills 
             to create impactful digital experiences.
            <br />
            <br />
            <div className="care-heading">What I Care About:</div>
            <ul className="care-list">
              <li>Clean and visually appealing app structure</li>
              <li>Understanding how clients feel</li>
              <li>Calm and continuous communication</li>
              <li>Honest feedback</li>
              <li>Delivering designs on time</li>
              <li>Working with kind and open-minded people</li>
            </ul>
        </div>
       
        <div className="window-outline">
          <div className="Meholder">
            <img src={Me} className="Me" alt="Logo" />
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
            {/* <img src={node} className="Tech" alt="Logo" />
            <img src={PHP} className="Tech" alt="Logo" />
            <img src={Java} className="Tech" alt="Logo" />
            <img src={Reacts} className="Tech" alt="Logo" />
            <img src={flutter} className="Tech" alt="Logo" />
            <img src={Dart} className="Tech" alt="Logo" />
            <img src={mongo} className="Tech" alt="Logo" />
            <img src={Mysql} className="Tech" alt="Logo" />
            <img src={Firebase} className="Tech" alt="Logo" /> */}
            <img src={XD} className="Tech" alt="Logo" />
            <img src={figma} className="Tech figma" alt="Logo" />
            <img src={PS} className="Tech" alt="Logo" />
            <img src={Ai} className="Tech" alt="Logo" />
            <img src={webflow} className="Tech webflow" alt="Logo" />
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
