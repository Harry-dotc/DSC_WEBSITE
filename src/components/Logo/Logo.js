import React from "react";

import dscLogo from "../../assets/Logo/Logo_1.png";
import dscLogoDark from "../../assets/Logo/Logo_2.png";
import classes from "./Logo.module.css";
import classesDark from "./LogoDark.module.css";

const Logo = ({ theme }) => {
  if (!theme) {
    return (
      <img className={classesDark.Logo} src={dscLogoDark} alt="DSC_DARK" />
    );
  }
  return <img className={classes.Logo} src={dscLogo} alt="DSC-logo" />;
};

export default Logo;
