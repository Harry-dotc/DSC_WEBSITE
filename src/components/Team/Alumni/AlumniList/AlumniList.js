import React from "react";

//import css
import classes from "./AlumniList.module.css";
import classesDark from "./AlumniListDark.module.css";

//import component
import AlumniMember from "../AlumniMember/AlumniMember";

//import DataFile
import { AlumniData } from "../AlumniData";

const AlumniList = (props) => {
  let styles = classes;
  if (props.theme) {
    styles = classes;
  } else {
    styles = classesDark;
  }

  const alumniList2020 = AlumniData.map((member) => {
    if (member.year === 2020) {
      return (
        <AlumniMember
          key={member.id}
          cardName={member.cardName}
          cardDesignation={member.cardDesignation}
          image={member.image}
          links={member.links}
          domain={member.domain}
          theme={props.theme}
        />
      );
    }
    return null;
  });

  const alumniList2021 = AlumniData.map((member) => {
    if (member.year === 2021) {
      return (
        <AlumniMember
          key={member.id}
          cardName={member.cardName}
          cardDesignation={member.cardDesignation}
          image={member.image}
          links={member.links}
          domain={member.domain}
          theme={props.theme}
        />
      );
    }
    return null;
  });

  return (
    <div className={styles.TeamList}>
    <div className={styles.section}>
      <h1 className={styles.teamListHeader}>Alumni</h1>
      <h2 className={styles.alumniBatchHeader}>Batch (2017-21)</h2>
      <div className={styles.listContainer}>{alumniList2021}</div>
      <h2 className={styles.alumniBatchHeader}>Batch (2016-20)</h2>
      <div className={styles.listContainer}>{alumniList2020}</div>
    </div>
  </div>
  );
};

export default AlumniList;
