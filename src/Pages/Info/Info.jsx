import "./Info.css";

import Ai from "../../Assets/Ai.png";
import css from "../../Assets/CSS.png";
import html from "../../Assets/HTML.png";
import js from "../../Assets/JS.png";
import PS from "../../Assets/PS.png";
import XD from "../../Assets/Xd.png";
import figma from "../../Assets/figma.png";
import webflow from "../../Assets/Webflow.png";
import Me from "../../Assets/Me2.png";
import Frame42 from "../../Assets/Me2.png";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../../Components/Navbar/Navbar";

function Info() {

  const [currentChapter, setCurrentChapter] = useState(0);

  // Story chapters data
  const storyChapters = [
    {
      id: 1,
      title: "Chapter 1: The Beginning",
      image: Frame42,
      description: "In my childhood, I wasn’t good at studies from Grade 1 to 5. I always watched TV, played games, and my appearance even made people call me “Sanee par” even though I was a girl! ( Just a hindi Movie Character ) \n \nMy first big challenge was the Grade 5 exam. My parents worked so hard to support me, but eventually, I failed it. That failure became a real turning point in my life. \n \nAfter that, I decided to become the “study-focused” kid. In our team, I wanted to be the geek, just like Hermione from Harry Potter (the only movie I watched at that time)."
    },
    {
      id: 2,
      title: "Chapter 2: The Journey",
      image: Frame42,
      description: "Exploring new possibilities"
    },
    {
      id: 3,
      title: "Chapter 3: The Future",
      image: Frame42,
      description: "Building tomorrow today"
    }
  ];

  const nextChapter = () => {
    setCurrentChapter((prev) => (prev + 1) % storyChapters.length);
  };

  const prevChapter = () => {
    setCurrentChapter((prev) => (prev - 1 + storyChapters.length) % storyChapters.length);
  };

  useEffect(() => {
    document.title = "Info";
  }, []);
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
        “ I’m a product designer who loves creating meaningful products that
        inspire me and bring excitement to everyone who uses them. ”
        {/* <span class="text-info-hero-serif"> user experiences.</span> */}
      </motion.div>

      <motion.div
        className="Aboutpart"
        initial={{ opacity: 0, y: 50 }} // start with 0 opacity and below the screen
        animate={{ opacity: 1, y: 0 }} // animate to full opacity and original position
        transition={{ duration: 1.5, ease: "easeOut" }} // control speed and easing
      >
        <div className="AboutText">
          I’m Minuri. I have experience in design and coding, and I love
          creating things that are meaningful, not just visually appealing. I
          care about how people feel when they interact with a design and aim to
          give users quick, seamless experiences. <br />
          <br />
          I’m a software engineering undergraduate with knowledge of the tech
          industry, and I’m passionate about low-code and no-code tools to bring
          ideas to life faster and more efficiently. I enjoy exploring
          user-centered solutions, experimenting with new technologies, and
          continuously improving my skills to create impactful digital
          experiences.
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
        {/* Decorative box removed from Aboutpart; moved to story section below */}
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

      <div className="story-carousel-section">
        <div className="story-header">
          <h2 className="story-title">Read My Story</h2>
        </div>

        <div className="story-chapters">
          <div className="story-carousel-container">
            <div className="story-content">
              <div className="story-card">
                {/* <div className="story-image-container">
                <img 
                  src={storyChapters[currentChapter].image} 
                  alt={storyChapters[currentChapter].title}
                  className="story-image"
                />
              </div> */}
                <div className="story-text">
                  <h3 className="chapter-title">
                    {storyChapters[currentChapter].title}
                  </h3>
                  <p className="chapter-description">
                    {storyChapters[currentChapter].description}
                  </p>
                </div>
              </div>

              <div className="story-controls">
                <button
                  className={`nav-btn prev ${currentChapter === 0 ? "disabled" : ""}`}
                  onClick={currentChapter === 0 ? undefined : prevChapter}
                  disabled={currentChapter === 0}
                  aria-label="Previous chapter"
                >
                  ↑
                </button>

                <div className="chapter-indicator vertical">
                  {storyChapters.map((_, index) => (
                    <div
                      key={index}
                      className={`dot ${index === currentChapter ? "active" : ""}`}
                      onClick={() => setCurrentChapter(index)}
                    />
                  ))}
                </div>

                <button
                  className={`nav-btn next ${currentChapter === storyChapters.length - 1 ? "disabled" : ""}`}
                  onClick={
                    currentChapter === storyChapters.length - 1
                      ? undefined
                      : nextChapter
                  }
                  disabled={currentChapter === storyChapters.length - 1}
                  aria-label="Next chapter"
                >
                  ↓
                </button>
              </div>
            </div>
          </div>

          {/* Floating panel that shows the current chapter details on the right */}
          <aside className="story-floating-box" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.div
                key={storyChapters[currentChapter]?.id ?? currentChapter}
                className="sf-big-number"
                initial={{ x: -40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 40, opacity: 0 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              >
                {(
                  (storyChapters[currentChapter]?.id ?? currentChapter + 1)
                )
                  .toString()
                  .padStart(2, "0")}
              </motion.div>
            </AnimatePresence>
          </aside>
        </div>
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
