import React from "react";
import { Link } from "react-router-dom";

//import css
import classes from "./TeamHome.module.css";
import classesDark from "./TeamHomeDark.module.css";

//import image
import teamImg from "../../../assets/images/team.png";

const TeamHome = (props) => {
  let styles = classes;
  if (props.theme) {
    styles = classes;
  } else {
    styles = classesDark;
  }
  return (
    <div className={styles.TeamHome}>
      <div className={styles.Container}>
        <h2 className={styles.teamHeader}>Team</h2>
        <div className={styles.teamContent}>
          <img src={teamImg} alt="team" />
          <div className={styles.teamBody}>
            <p>
              A Team is as efficient as the members of its team are. This is a
              rundown of how explicable each individual is and how they
              supplement the team.
            </p>
            <Link to="/team">SEE MORE</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamHome;
