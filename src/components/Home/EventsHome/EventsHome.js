import React from "react";
import { Link } from "react-router-dom";

//css import
import classes from "./EventsHome.module.css";
import classesDark from "./EventsHomeDark.module.css";

//Events data
import { EventsData } from "../../Events/EventsData";

//image import
// import image1 from "../../../assets/images/events.jpg";

//import component
import Card from "../../UI/Card/Card";

const EventsHome = (props) => {
  let styles = classes;
  if (props.theme) {
    styles = classes;
  } else {
    styles = classesDark;
  }

  let cnt = 0;
  const renderList = [];
  EventsData.forEach((data) => {
    if (cnt < 3) {
      renderList.push(
        <Card
          key={data.id}
          eventImg={data.eventImg}
          cardTitle={data.cardTitle}
          cardSubtitle={data.cardSubtitle}
          cardText={data.cardText}
          cardHref={data.cardHref}
          theme={props.theme}
        />
      );
    }
    cnt++;
  });
  return (
    <div className={styles.EventsHome}>
      <div className={styles.Container}>
        <h1>Recent Events</h1>
        <div className={styles.cardList}>{renderList}</div>
        <Link to="/events" className={styles.eventBtn}>
          SEE MORE
        </Link>
      </div>
    </div>
  );
};

export default EventsHome;
