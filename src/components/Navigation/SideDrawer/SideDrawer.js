import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
// import CSS
import classes from "./SideDrawer.module.css";
import classesDark from "./SideDrawerDark.module.css";

// import icons
import * as MdIcons from "react-icons/md";

// import components
import Logo from "../../Logo/Logo";
import ThemeButton from "../../UI/ThemeButton/ThemeButton";

const SideDrawer = (props) => {
  const [sidebar, setSidebar] = useState(false);
  const [shadow, setShadow] = useState(false);

  let styles = classes;
  if (props.theme) {
    styles = classes;
  } else {
    styles = classesDark;
  }

  const boxShadowHandler = () => {
    if (window.scrollY >= 100) {
      setShadow(true);
    } else if (window.scrollY < 100) {
      setShadow(false);
    }
  };

  let shadowActiveclass = [styles.SideDrawer, null];

  if (shadow === true) {
    shadowActiveclass = [styles.SideDrawer, styles.active];
  }

  window.addEventListener("scroll", boxShadowHandler);

  const showSidebar = () => setSidebar(!sidebar);

  const navMenuActive = [styles.navMenu, styles.navActive];

  return (
    <div className={styles.Container}>
      <div className={shadowActiveclass.join(" ")}>
        <MdIcons.MdMenu onClick={showSidebar} className={styles.menuBars} />
        &nbsp;
        <Link to="/" className={styles.logo}>
          <Logo theme={props.theme} />
        </Link>
        <span className={styles.themeMode}>
          <ThemeButton switchTheme={props.switchTheme} theme={props.theme} />
        </span>
      </div>
      <nav className={sidebar ? navMenuActive.join(" ") : styles.navMenu}>
        <ul className={styles.navMenuItems} onClick={showSidebar}>
          <li className={styles.SideDrawerToggle}>
            <Link to="#" className={styles.menuBars}>
              <MdIcons.MdClose className={styles.close} />
            </Link>
          </li>
          <li className={styles.navText}>
            <NavLink
              to="/"
              exact
              className={styles.menuBars}
              activeClassName={styles.selected}
            >
              <MdIcons.MdHome />
              <span>Home</span>
            </NavLink>
          </li>
          <li className={styles.navText}>
            <NavLink
              to="/projects"
              className={styles.menuBars}
              activeClassName={styles.selected}
            >
              <MdIcons.MdWork />
              <span>Projects</span>
            </NavLink>
          </li>
          <li className={styles.navText}>
            <NavLink
              to="/events"
              className={styles.menuBars}
              activeClassName={styles.selected}
            >
              <MdIcons.MdEvent />
              <span>Events</span>
            </NavLink>
          </li>
          {/* <li className={styles.navText}>
            <NavLink
              to="/blog"
              className={styles.menuBars}
              activeClassName={styles.selected}
            >
              <MdIcons.MdBook />
              <span>Blogs</span>
            </NavLink>
          </li> */}
          <li className={styles.navText}>
            <NavLink
              to="/team"
              className={styles.menuBars}
              activeClassName={styles.selected}
            >
              <MdIcons.MdPeople />
              <span>Team</span>
            </NavLink>
          </li>

          {/* <li className={styles.navText}>
            <NavLink
              to="/register"
              className={styles.menuBars}
              activeClassName={styles.selected}
            >
              <MdIcons.MdMessage />
              <span>Register</span>
            </NavLink>
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default SideDrawer;
