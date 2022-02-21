import React from "react";
import { Link } from "react-router-dom";

// import css
import classes from "./Footer.module.css";
import classesDark from "./FooterDark.module.css";

//icon Import
import * as FiIcons from "react-icons/fi";

//import component
import Logo from "../../Logo/Logo";

const Footer = (props) => {
  let styles = classes;
  if (props.theme) {
    styles = classes;
  } else {
    styles = classesDark;
  }
  return (
    <footer className={styles.Footer}>
      <div className={styles.Container}>
        <div className={styles.footerTop}>
          <div className={styles.logo}>
            <Link to="/">
              <Logo theme={props.theme} />
            </Link>
          </div>
          <div className={styles.quickLinks}>
            <h5 className={styles.linkHeader}>Quick Links</h5>
            <ul className={styles.linkList}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/events">Events</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              {/* <li>
                <Link to="/blog"> Blog</Link>
              </li> */}
              <li>
                <Link to="/team">Team</Link>
              </li>
              {/* <li>
                <Link to="/register">Register</Link>
              </li> */}
            </ul>
          </div>
          <div className={styles.socials}>
            <h5 className={styles.socialsHeader}>Social</h5>
            <ul className={styles.socialLinks}>
              <li>
                <a href="https://www.instagram.com/dsc_akgec/" target="_blank" rel="noopener noreferrer">
                  <FiIcons.FiInstagram />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCZvNkM_UNgR4_2fQpBqvWUw"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiIcons.FiYoutube />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/dsc-akgec/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiIcons.FiLinkedin />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/dsc_akgec" target="_blank" rel="noopener noreferrer">
                  <FiIcons.FiTwitter />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className={styles.footerGap} />
        <div className={styles.footerBottom}>
          <div className={styles.footerBottomContainer}>
            <div className={styles.copyright}>&copy; GDSC-AKGEC</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
