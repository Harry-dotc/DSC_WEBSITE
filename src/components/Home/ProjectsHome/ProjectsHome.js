import React from "react";
import { Link } from "react-router-dom";

//import css
import classes from "./ProjectsHome.module.css";
import classesDark from "./ProjectsHomeDark.module.css";

//image import
import projectsImg from "../../../assets/images/projects.png";

const ProjectsHome = (props) => {
  let styles = classes;
  if (props.theme) {
    styles = classes;
  } else {
    styles = classesDark;
  }
  return (
    <div className={styles.ProjectsHome}>
      <div className={styles.Container}>
        <h2 className={styles.projectsHeader}>Projects</h2>
        <div className={styles.projectsContent}>
          <img src={projectsImg} alt="projects" />
          <div className={styles.projectsBody}>
            <p>
              The projects show what a team stands for and what mindset they
              keep towards transforming this world into a better place.
            </p>
            <Link to="/projects">SEE MORE</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsHome;
