import React from "react";

//import css
import classes from "./ShowcaseAlumni.module.css";
import classesDark from "./ShowcaseAlumniDark.module.css";

const ShowcaseTeam = (props) => {
  let styles = classes;
  if (props.theme) {
    styles = classes;
  } else {
    styles = classesDark;
  }
  return (
    <div className={styles.ShowcaseAlumni}>
      <div className={styles.container}>
        <h1 className={styles.alumniHeader}>Meet The Alumni</h1>
        <p className={styles.alumniInfo}>
          Every member of the society has always been passionate and hard
          working towards their goal, creating a positive work environment.
          Their support and will to help each other out in every way possible is
          what makes DSC-AkGEC a "team".
        </p>
      </div>
    </div>
  );
};

export default ShowcaseTeam;
