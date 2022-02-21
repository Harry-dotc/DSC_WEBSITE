import React from "react";

//import Css
import classes from "./TeamMember.module.css";
import classesDark from "./TeamMemberDark.module.css";

//import icons
import * as FiIcons from "react-icons/fi";

const TeamMember = (props) => {
  let styles = classes;
  if (props.theme) {
    styles = classes;
  } else {
    styles = classesDark;
  }

  let cardClassDomain, cardImgDomain, svgClassDomain;
  switch (props.domain) {
    case 1:
      cardClassDomain = styles.card1;
      cardImgDomain = styles.cardImg1;
      svgClassDomain = styles.svgDomain1;
      break;
    case 2:
      cardClassDomain = styles.card2;
      cardImgDomain = styles.cardImg2;
      svgClassDomain = styles.svgDomain2;
      break;
    case 3:
      cardClassDomain = styles.card3;
      cardImgDomain = styles.cardImg3;
      svgClassDomain = styles.svgDomain3;
      break;
    case 4:
      cardClassDomain = styles.card4;
      cardImgDomain = styles.cardImg4;
      svgClassDomain = styles.svgDomain4;
      break;
    default:
      break;
  }

  return (
    <div className={styles.TeamMember}>
      <div className={`${styles.card} ${cardClassDomain}`}>
        <div>
          <div className={`${styles.cardImg} ${cardImgDomain}`}>
            <img src={props.image} alt={props.cardName} />
          </div>
          <div className={styles.cardBody}>
            <h1 className={styles.cardName}>{props.cardName}</h1>
            <h2 className={styles.cardDesignation}>{props.cardDesignation}</h2>
            <ul className={styles.linkList}>
              <li>
                <a href={props.links.github} target={"_blank"} rel="noopener noreferrer">
                  <FiIcons.FiGithub className={svgClassDomain} />
                </a>
              </li>
              <li>
                <a href={props.links.linkedin} target={"_blank"} rel="noopener noreferrer">
                  <FiIcons.FiLinkedin className={svgClassDomain} />
                </a>
              </li>
              {/* <li>
                <a href={props.links.instagram}>
                  <FiIcons.FiInstagram className={svgClassDomain} />
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
