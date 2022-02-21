import React from "react";

//import Css
import classes from "./AlumniMember.module.css";
import classesDark from "./AlumniMemberDark.module.css";

//import icons
import * as FiIcons from "react-icons/fi";

const AlumniMember = (props) => {
  let styles = classes;
  if (props.theme) {
    styles = classes;
  } else {
    styles = classesDark;
  }

  return (
    <div className={styles.TeamMember}>
      <div className={styles.card}>
        <div>
          <div className={styles.cardImg}>
            <img src={props.image} alt={props.cardName} />
          </div>
          <div className={styles.cardBody}>
            <h1 className={styles.cardName}>{props.cardName}</h1>
            <h2 className={styles.cardDesignation}>{props.cardDesignation}</h2>
            <ul className={styles.linkList}>
              <li>
                <a href={props.links.linkedin} target={"_blank"} rel="noopener noreferrer">
                  <FiIcons.FiLinkedin />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniMember;
