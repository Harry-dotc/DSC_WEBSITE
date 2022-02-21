import React, { useState } from "react";

//css classes
import classes from "./Accordion.module.css";
import classesDark from "./AccordionDark.module.css";

//import component
import AlumniMember from "../../Team/Alumni/AlumniMember/AlumniMember";

//import dataFile
import { AlumniData } from "../../Team/Alumni/AlumniData";

const Accordion = (props) => {
  let styles = classes;
  if (props.theme) {
    styles = classes;
  } else {
    styles = classesDark;
  }

  //setting state
  const [isOpen, setIsOpen] = useState(false);

  const alumniList2021 = AlumniData.map((member) => {
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
  return (
    <div className={styles.accordion}>
      <div className={styles.header} onClick={() => setIsOpen(!isOpen)}>
        <h2 className={styles.heading}>Demo Accordion</h2>
        <div className={styles.icon}>
          {isOpen ? (
            <i className="fas fa-chevron-up"></i>
          ) : (
            <i className="fas fa-chevron-down"></i>
          )}
        </div>
      </div>
      {isOpen && <div className={styles.listContainer}>{alumniList2021}</div>}
    </div>
  );
};

export default Accordion;
