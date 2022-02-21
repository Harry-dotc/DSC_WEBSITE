import React from "react";

// import css
import classes from "./ProjectCard.module.css";
import classesDark from "./ProjectCardDark.module.css";

//import icons
import * as FaIcons from "react-icons/fa";

const ProjectCard = (props) => {
  let styles = classes;
  if (props.theme) {
    styles = classes;
  } else {
    styles = classesDark;
  }

  const mediaMatch = window.matchMedia("(max-width:819px");

  let web = props.cardTags["web"];
  let ml = props.cardTags["ml"];
  let app = props.cardTags["app"];

  let member = props.members;

  const membersList = member.map((name) => {
    return (
      <li key={name}>
        <p className={styles.memberName}>{name}</p>
      </li>
    );
  });

  const webList = web.map((tag) => {
    return (
      <li key={tag}>
        <div className={`${styles.singleTag} ${styles.web}`}>{tag}</div>
      </li>
    );
  });

  const mlList = ml.map((tag) => {
    return (
      <li key={tag}>
        <div className={`${styles.singleTag} ${styles.ml}`}>{tag}</div>
      </li>
    );
  });

  const appList = app.map((tag) => {
    return (
      <li key={tag}>
        <div className={`${styles.singleTag} ${styles.app}`}>{tag}</div>
      </li>
    );
  });

  let borderStyle = {};

  let orderClass = [styles.cardImg];
  // console.log(mediaMatch);
  if (!props.order && !mediaMatch.matches) {
    orderClass = [styles.cardImg, styles.order];
    borderStyle = {
      borderLeft: "0.5px solid var(--border-color)",
      borderRight: "none",
      borderRadius: "0 5px 5px 0",
    };
  } else if (mediaMatch.matches) {
    orderClass = [styles.cardImg];
    borderStyle = {
      borderLeft: "none",
      borderRight: "none",
    };
  }

  return (
    <div className={styles.ProjectCard}>
      <div className={`${styles.card}`}>
        <div className={orderClass.join(" ")} style={borderStyle}>
          <img src={props.image} alt="project" />
        </div>
        <div className={styles.cardBody}>
          <div className={styles.cardInfo}>
            <a href={props.links.github}>
              <h1 className={styles.cardHeader}>{props.cardHeader}</h1>
            </a>
            <ul className={styles.tags}>
              {webList}
              {mlList}
              {appList}
            </ul>
            <ul className={styles.members}>{membersList}</ul>
          </div>
          <div className={styles.cardText}>
            {props.cardText}
            <ul className={styles.links}>
              <li>
                <a href={props.links.github} target={"_blank"} rel="noopener noreferrer">
                  <FaIcons.FaGithub />
                  <span>&nbsp;Github</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
