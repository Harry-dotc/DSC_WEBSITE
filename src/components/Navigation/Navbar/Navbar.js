import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import classes from "./Navbar.module.css";
import classesDark from "./NavbarDark.module.css";
import Logo from "../../Logo/Logo";
import ThemeButton from "../../UI/ThemeButton/ThemeButton";

const Navbar = (props) => {
  const [navbar, setNavabr] = useState(false);
  let styles = classes;
  if (props.theme) {
    styles = classes;
  } else {
    styles = classesDark;
  }

  const boxShadowHandler = () => {
    if (window.scrollY >= 100) {
      setNavabr(true);
    } else if (window.scrollY < 100) {
      setNavabr(false);
    }
  };

  let navbarActiveclass = [styles.Navbar, null];

  if (navbar === true) {
    navbarActiveclass = [styles.Navbar, styles.active];
  }

  let darkModeClasses = [styles.Popup, styles.NavigationItem];

  window.addEventListener("scroll", boxShadowHandler);

  return (
    <header>
      <div className={navbarActiveclass.join(" ")}>
        <div className={styles.Container}>
          <div className={styles.NavbarLeft}>
            <NavLink to="/" className={styles.NavbarLogo}>
              <Logo theme={props.theme} />
            </NavLink>
          </div>
          <div className={styles.NavbarRight}>
            <ul className={styles.NavigationItems}>
              <li className={styles.NavigationItem}>
                <NavLink to="/" exact activeClassName={styles.selected}>
                  Home
                </NavLink>
              </li>
              <li className={styles.NavigationItem}>
                <NavLink to="/events" activeClassName={styles.selected}>
                  Events
                </NavLink>
              </li>
              <li className={styles.NavigationItem}>
                <NavLink to="/projects" activeClassName={styles.selected}>
                  Projects
                </NavLink>
              </li>
              {/* <li className={styles.NavigationItem}>
                <NavLink to="/blog" activeClassName={styles.selected}>
                  Blog
                </NavLink>
              </li> */}
              <li className={styles.NavigationItem}>
                <NavLink to="/team" activeClassName={styles.selected}>
                  Team
                </NavLink>
              </li>
              {/* <li className={styles.NavigationItem}>
                <NavLink to="/register" activeClassName={styles.selected}>
                  Register
                </NavLink>
              </li> */}
              <li className={darkModeClasses.join(" ")}>
                <ThemeButton
                  switchTheme={props.switchTheme}
                  theme={props.theme}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

// import { CSSTransition } from "react-transition-group";

// <CSSTransition
//   in={true}
//   appear={true}
//   timeout={{
//     appear: 400,
//   }}
//   classNames={{ ...classes }}
// >
// </CSSTransition>
