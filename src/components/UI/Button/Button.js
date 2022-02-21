import React from "react";

//css classes
import classes from "./Button.module.css";
import classesDark from "./ButtonDark.module.css";

const Button = (props) => {
  let styles = classes;
  if (props.theme) {
    styles = classes;
  } else {
    styles = classesDark;
  }
  return (
    <a href={props.href} className={styles.Button} style={props.style}>
      <i className="material-icons">{props.icon}</i>
      <span> {props.children}</span>
    </a>
  );
};

export default Button;
