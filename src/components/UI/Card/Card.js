import React from "react";
// import { NavLink } from "react-router-dom";

// css import
import classes from "./Card.module.css";
import classesDark from "./CardDark.module.css";

const Card = (props) => {
  let styles = classes;
  if (props.theme) {
    styles = classes;
  } else {
    styles = classesDark;
  }
  return (
    <div className={styles.card}>
      <img
        src={props.eventImg}
        alt={props.imgData}
        className={styles.cardImage}
      />
      <div className={styles.cardBody}>
        <a href={props.cardHref} target={"_blank"} rel="noopener noreferrer">
          <h3 className={styles.cardHeader}>{props.cardTitle}</h3>
        </a>
        <p>{props.cardText}</p>
        <a href={props.cardHref} className={styles.btn} target={"_blank"} rel="noopener noreferrer">
          Read
        </a>
      </div>
    </div>
  );
};

export default Card;
