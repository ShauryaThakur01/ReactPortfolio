import React, { useContext } from "react";
import { ThemeContext } from "../../context";
import "./about.css";
// import Award from "../../img/award.png";
import aboutme from "../../img/aboutme.jpg";
import linkedin from "../../img/linkedin.png";
import linkedinlight from "../../img/linkedinlight.png";
import githubmark from "../../img/githubmark.png";
import githubmarkwhite from "../../img/githubmarkwhite.png";
import resume from "../../img/resume.png";
import resumelight from "../../img/resumelight.png";
import project from "../../img/project.png";

const About = () => {
  const theme = useContext(ThemeContext); // Get the theme context
  const darkMode = theme.state.darkMode; // Get the darkMode state
  // Choose the appropriate GitHub image based on darkMode
  const githubImage = darkMode ? githubmarkwhite : githubmark;
  const linkedinImage = darkMode ? linkedinlight : linkedin;
  const resumeImage = darkMode ? resumelight : resume;
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={aboutme} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          I'm, a passionate and ambitious individual currently pursuing a
          Bachelor's degree in Computer Science from <b>Bennett University</b> . I am an
          aspiring web developer and software developer, with a keen interest in
          crafting innovative and user-friendly digital solutions.
        </p>
        <p className="a-desc">
          <b className="head">Education</b>: I am currently enrolled in the <b>Computer Science </b>
          program at <b>Bennett University</b>, where I am honing my technical skills
          and gaining a solid foundation in programming, software
          development & web development. My overall <b>GPA</b> in University is <b>8.5</b>. I did my schooling from Him Academy Public School where my <b>12th</b> class score is <b>92.6%</b> and my <b>10th</b> class score is <b>91.4%</b>
        </p>
        <p className="a-desc">
          <b className="head">Skills</b>: I possess a diverse skill set that includes expertise
          in front-end web development technologies such as <b>ReactJS, HTML, CSS,
          and JavaScript</b>. I take pride in creating responsive and visually
          appealing user interfaces that deliver an exceptional user experience.
          Additionally, I am well-versed in back-end development with languages
          like <b>C++, Java, and Python</b> , allowing me to build robust and scalable
          software solutions.
        </p>
        <div className="item">
          <div className="itemContainer">
            {<img src={linkedinImage} alt="" className="imgContainer" />}
            <a
              href="https://www.linkedin.com/in/shaurya-thakur-b72a9a20b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="buttonContainer">Linkedin</button>
            </a>
          </div>
          <div className="itemContainer">
            {<img src={githubImage} alt="" className="imgContainer imgright"/> }
            <a
              href="https://github.com/ShauryaThakur01"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="buttonContainer">Github</button>
            </a>
          </div>
          <div className="itemContainer">
            <img src={resumeImage} alt="" className="imgContainer imgright" />
            <a
              href="https://drive.google.com/file/d/1Dm1-A8l0Nlx6dSIh26TyLc9B25hJNb9G/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="buttonContainer">Check Resume</button>
            </a>
          </div>
          <div className="itemContainer">
            <img src={project} alt="" className="imgContainer imgright" />
            <a
              href="https://drive.google.com/file/d/1qdcbZQlUfZhIX6l7rzHH6LRcZdAmLSMF/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="buttonContainer">Deployed Projects</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
