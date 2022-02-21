import React from "react";

//importing icons
import * as IconName from "react-icons/fi";

//css classes
import classes from "./ThemeButton.module.css";
import classesDark from "./ThemeButtonDark.module.css";

const ThemeButton = ({ switchTheme, theme }) => {
  let block = {};
  let styles = classes;
  if (theme) {
    styles = classesDark;
    block = <IconName.FiMoon />;
  } else {
    styles = classes;
    block = <IconName.FiSun />;
  }

  return (
    <button className={styles.ThemeButton} onClick={switchTheme}>
      {block}
    </button>
  );
};

export default ThemeButton;
