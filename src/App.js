import React from "react";
import { useState } from "react";
import SearchBar from'./SearchBar.js';

export default function App() {
  return (
    <div className="App">
      <Navbar />
    <div className="content">
        <MainProfile />
        <Sidebar />
        <About />
        <Experience />
        <Skills />
    </div>
    </div>
  );
}

//Navbar
function Navbar() {
  return (
    <nav className="navbar">    
      <div className="logo"> 
        <img src="linkedin-logo.png" alt="LinkedIn Logo" />
      </div>
      <SearchBar /> 
      <div className="nav-links"> 
        <div className="nav-item"> 
          <i className="fas fa-home"></i> 
          <span>Home</span> 
        </div>
        <div className="nav-item">
          <i className="fas fa-user-friends"></i>
          <span>My Network</span> 
        </div>
        <div className="nav-item">
          <i className="fas fa-briefcase"></i>
          <span>Jobs</span> 
        </div>
        <div className="nav-item">
          <i className="fas fa-comments"></i>
          <span>Messaging</span> 
        </div>
        <div className="nav-item">
          <i className="fas fa-bell"></i>
          <span>Notifications</span> 
        </div>
        <div className="nav-item">
          <img src="michaelyan.jpg" alt="Me" className="profile-icon" />
          <span>Me</span> 
        </div>
        <div className="nav-item">
          <i className="fas fa-th"></i>
          <span>For Business</span> 
        </div>
        <div className="nav-item premium">
          <span>Try Premium for ₹0</span> 
        </div>
      </div>
    </nav>
  );
}

// profile section
function MainProfile() {
  return (
    <div className="main-profile">
      <div className="profile-banner"> 
        <img                      
          src="mbanner.jpg"
          alt="Banner"          
          className="banner-image"
        />
      </div>
      <div className="profile-content"> 
        <img
          src="michaelyan.jpg" 
          alt="Profile"
          className="profile-image"
        />
        <h2>Michael Yan</h2> 
        <p>Founder & CEO @ Simplify | Looking for a job?</p> 
        <p>San Francisco, California, United States</p>
        <button className="btn">Message</button>
        <button className="btn">More</button>
        <button className="btn">Edit profile</button>
        <div>134,472 followers & 500+ connections</div>
      </div>
    </div>
  );
}

// Sidebar section
function Sidebar() {
return (
  <div className="sidebar"> 
      <div className="promo-box">
        <h4>Michael, you might like to follow</h4>
        <div className="follow-suggestion"> 
          <img
            src="aramco.jpg"
            alt="Aramco"
            className="follow-image"
          /> 
          <div>
            <p id="sname"><strong>Aramco</strong></p>
            <button className="btn follow-btn">Follow</button>
          </div>
        </div>
      </div>
      <div className="more-profiles"> 
        <h4 id="more">More profiles for you</h4>
        <div>
          <p>
            <strong>Ethan Horoschak</strong>
          </p>
          <p>Co-Founder at Simplify | Hiring Senior SWEs!</p>
          <button className="btn">
            View profile
          </button>
        </div>
    </div>
  </div>
  );
}

// About section
function About() {
  const [isExpanded, setIsExpanded] = useState(false);
  const fullText =
    "Hi, I’m Michael Yan—a tech enthusiast, software developer, and lifelong learner with a passion for solving complex problems through innovative solutions. With a strong foundation in software engineering and a creative mindset, I thrive on building user-centric applications that deliver value and make an impact."; 
  const previewText = "Hi, I’m Michael Yan—a tech enthusiast, software developer...";

  return (
    <div className="main-about">
      <h1>About</h1>
      <p>{isExpanded ? fullText : previewText}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="show-more-button"
      >
        {isExpanded ? "Show Less" : "Show More"}
      </button></p>
    </div>
  );
}

// Experience Section
function Experience() {
  return(
  <div class="main-exp">
  <div class="job-exp">
    <h1>Experience</h1>
  </div>
  <div class="job-content">
    <img src="simplify.jpg" alt="Company Logo" class="company-logo" />
    <div class="job-details">
      <p>
        <strong>Co-Founder & CEO</strong>
      </p>
      <p>Simplify · Full-time</p>
      <p id="uni-font">2020 - Present · 4 yrs 11 mos 
      <br />
      San Francisco, California
      </p>
      <p>Building the AI assistant for your job search – backed by YC, Craft, and some other incredible investors. Try it out for free on 1m+ roles @ simplify.jobs!
        <br />
        <br />
        We’re hiring!! Apply here: https://simplify.jobs/c/Simplify </p>
    </div>
  </div>
<div className="sol-line"></div>
  <div class="job-content">
    <img src="meta.jpg" alt="Company Logo" class="company-logo" />
    <div class="job-details">
      <p><strong>Software Developer</strong></p>
      <p>Full-time</p>
      <p id="uni-font">2020 - 2020 Less than a year 
      </p>
    </div>
  </div>
<div className="sol-line"></div>
  <div class="job-content">
    <img src="coupa.jpg" alt="Company Logo" class="company-logo" />
    <div class="job-details">
      <p><strong>Data Science</strong></p>
      <p>Coupa Software · Full-time</p> 
      <p id="uni-font">2019 - 2020 · 1 yr</p>
    </div>
  </div>
</div>
  );
} 

// Skill section
function Skills() {
  const [jsEndorsementCount, setJsEndorsementCount] = useState(3);
  const [htmlEndorsementCount, setHtmlEndorsementCount] = useState(5);
  const [cssEndorsementCount, setCssEndorsementCount] = useState(2);
  const handleJsEndorse = () => {
    setJsEndorsementCount(jsEndorsementCount + 1);
  };
  const handleHtmlEndorse = () => {
    setHtmlEndorsementCount(htmlEndorsementCount + 1);
  };
  const handleCssEndorse = () => {
    setCssEndorsementCount(cssEndorsementCount + 1);
  };
  return (
    <div className="main-skill">
      <h1>Skills</h1>
      <div className="skill-section">
        <strong>JavaScript</strong>
        <div className="skill-content">
          <div className="end-section">
            <p>
              <i className="fa fa-thumbs-up"></i> &nbsp;
              {jsEndorsementCount} Endorsements
            </p>
          </div>
          <button onClick={handleJsEndorse} className="endorse-button">
            Endorse
          </button>
        </div>
        <div className="sol-line"></div>
      </div>
      <div className="skill-section">
        <strong>HTML5</strong>
        <div className="skill-content">
          <div className="end-section">
            <p>
              <i className="fa fa-thumbs-up"></i> &nbsp;
              {htmlEndorsementCount} Endorsements
            </p>
          </div>
          <button onClick={handleHtmlEndorse} className="endorse-button">
            Endorse
          </button>
        </div>
        <div className="sol-line"></div>
      </div>
      <div className="skill-section">
        <strong>CSS3</strong>
        <div className="skill-content">
          <div className="end-section">
            <p>
              <i className="fa fa-thumbs-up"></i> &nbsp;
              {cssEndorsementCount} Endorsements
            </p>
          </div>
          <button onClick={handleCssEndorse} className="endorse-button">
            Endorse
          </button>
        </div>
      </div>
    </div>
  );
}