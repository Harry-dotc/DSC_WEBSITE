import React from "react";

//import css
import classes from "./TeamList.module.css";
import classesDark from "./TeamListDark.module.css";

//import component
import TeamMember from "../TeamMember/TeamMember";

//import DataFile
import { TeamData } from "../TeamData";

const TeamList = (props) => {
  let styles = classes;
  if (props.theme) {
    styles = classes;
  } else {
    styles = classesDark;
  }

  const Lead = TeamData.map((member) => {
    if (member.year === 0) {
      return (
        <TeamMember
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

  let cnt4 = 0;
  const fourthYearList = TeamData.map((member) => {
    if (member.year === 4) {
      return (
        <TeamMember
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
    cnt4++;
    return null;
  });

  let cnt3 = 0;
  const thirdYearList = TeamData.map((member) => {
    if (member.year === 3) {
      return (
        <TeamMember
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
    cnt3++;
    return null;
  });

  let cnt2 = 0;
  const secondYearList = TeamData.map((member) => {
    if (member.year === 2) {
      return (
        <TeamMember
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
    cnt2++;
    return null;
  });

  return (
    <div className={styles.TeamList}>
      <div className={styles.section}>
        <h1 className={styles.teamListHeader}>Dsc Lead 2021</h1>
        <div className={styles.listContainer}>{Lead}</div>
      </div>
      {cnt4 !== fourthYearList.length && (
        <div className={styles.section}>
          <h1 className={styles.teamListHeader}>Members from 4th Year</h1>
          <div className={styles.listContainer}>{fourthYearList}</div>
        </div>
      )}
      {cnt3 !== thirdYearList.length && (
        <div className={styles.section}>
          <h1 className={styles.teamListHeader}>Members from 3rd Year</h1>
          <div className={styles.listContainer}>{thirdYearList}</div>
        </div>
      )}
      {cnt2 !== secondYearList.length && (
        <div className={styles.section}>
          <h1 className={styles.teamListHeader}>Members from 2nd Year</h1>
          <div className={styles.listContainer}>{secondYearList}</div>
        </div>
      )}
    </div>
  );
};

export default TeamList;
