import React from "react";

//import css
import classes from "./EventsList.module.css";
import classesDark from "./EventsListDark.module.css";

import Event from "../Event/Event";

//DataFile import
import { EventsData } from "../EventsData";

const EventsList = (props) => {
  let styles = classes;
  if (props.theme) {
    styles = classes;
  } else {
    styles = classesDark;
  }
  return (
    <div className={styles.EventsList}>
      <div className={styles.wrapper}>
        {EventsData.map((Card) => {
          return (
            <Event
              key={Card.id}
              eventImg={Card.eventImg}
              cardTitle={Card.cardTitle}
              cardSubtitle={Card.cardSubtitle}
              cardText={Card.cardText}
              cardHref={Card.cardHref}
              theme={props.theme}
            />
          );
        })}
      </div>
    </div>
  );
};

export default EventsList;
