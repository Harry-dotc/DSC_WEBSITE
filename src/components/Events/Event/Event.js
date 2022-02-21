import React from "react";

//import css
import classes from "./Event.module.css";
import classesDark from "./EventDark.module.css";

const Event = (props) => {
  let styles = classes;
  if (props.theme) {
    styles = classes;
  } else {
    styles = classesDark;
  }
  return (
    <>
      <div className={styles.Event}>
        <div className={styles.card}>
          <div className={styles.cardImg}>
            <img src={props.eventImg} alt={props.cardTitle} />
          </div>
          <div className={styles.cardBody}>
            <a
              href={props.cardHref}
              className={styles.cardTitleLink}
              target={"_blank"}
              rel="noopener noreferrer"
            >
              <h3 className={styles.cardTitle}>{props.cardTitle}</h3>
            </a>
            <h4 className={styles.cardSubtitle}>{props.cardSubtitle}</h4>
            <p className={styles.cardText}>{props.cardText}</p>
            {/* <a href={props.cardHref} className={styles.cardBtn}>
              Learn More
            </a> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Event;
