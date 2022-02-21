import React, { useState } from "react";

//import css
import classes from "./ShowcaseContact.module.css";
import classesDark from "./ShowcaseContactDark.module.css";

//image import
import registerImg from "../../../assets/images/register.png";

//import Components
import ContactForm from "../ContactForm/ContactForm";
import Success from "../Success/Success";

const ShowcaseContact = (props) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitContact() {
    // console.log("Success");
    setIsSubmitted(true);
  }

  let styles = classes;
  if (props.theme) {
    styles = classes;
  } else {
    styles = classesDark;
  }

  return (
    <div className={styles.ShowcaseContact}>
      <div className={styles.Container}>
        <h1 className={styles.registerHeader}>Registration Open</h1>
        <div className={styles.wrapper}>
          {!isSubmitted ? (
            <ContactForm submitContact={submitContact} theme={props.theme} />
          ) : (
            <Success theme={props.theme} />
          )}
          {/* <Success theme={props.theme} /> */}
          <div className={styles.formContentRight}>
            <img
              src={registerImg}
              alt="register"
              className={styles.imgContainer}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseContact;
