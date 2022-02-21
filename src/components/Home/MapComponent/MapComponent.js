import React from "react";

//import css
import classes from "./MapComponent.module.css";

const MapComponent = (props) => {
  let styles = "invert(0%)";
  if (props.theme) {
    styles = "invert(0%)";
  } else {
    styles = "invert(90%)";
  }
  return (
    <div className={classes.mapContainer}>
      <div className={classes.mapdiv}>
        <div className={classes.iframediv}>
          <iframe
            title={"map"}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.46685053985!2d77.49981005081881!3d28.67567828879097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf30885b1e2a5%3A0x9983675e24c6638b!2sAKGEC%3A%20Ajay%20Kumar%20Garg%20Engineering%20College%2C%20Ghaziabad!5e0!3m2!1sen!2sus!4v1624864371730!5m2!1sen!2sus/place?key=AIzaSyAa24fKevZbictK53-E5wjvBiyj-6SgmeQ&q"
            width="100%"
            frameBorder={0}
            style={{ border: 0, filter: styles }}
            allowFullScreen
            aria-hidden="false"
            tabIndex={0}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default MapComponent;
