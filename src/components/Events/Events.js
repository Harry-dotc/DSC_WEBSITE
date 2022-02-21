import React from "react";
import { Helmet } from "react-helmet";

// import css
import classes from "./Events.module.css";
import classesDark from "./EventsDark.module.css";

//import component
import ShowcaseEvents from "./ShowcaseEvents/ShowcaseEvents";
import EventsList from "./EventsList/EventsList";
import Footer from "../UI/Footer/Footer";

class Events extends React.Component {
  // componentDidMount() {
  //   var heightEle = document.querySelector(`.${classes.Events}`).clientHeight;
  //   // console.log(heightEle);
  //   this.props.setHeight(heightEle);
  // }
  render() {
    let styles = classes;
    if (this.props.theme) {
      styles = classes;
    } else {
      styles = classesDark;
    }
    return (
      <div className={styles.Events}>
        <Helmet>
          <title>DSC | AKGEC | Events</title>
          <meta
            name="description"
            content="Developer Student Clubs AKGEC Events"
          />
          <meta property="og:title" content="DSC AKGEC" />
          <meta property="og:type" content="event.article" />
          <meta property="og:url" content="https://dscakgec.org/events" />
          <meta
            property="og:image"
            content="https://images.app.goo.gl/UQrT9aN5vNwQWDMHA"
          />
          <meta
            property="og:description"
            content="The main motive behind each and every event DSC-AKGEC has conducted has always been spreading knowledge and giving inspiration to developers."
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@dsc_akgec" />
          <meta name="twitter:account_id" content="1180336578507370496" />
          <meta name="twitter:title" content="DSC AKGEC Events" />
          <meta
            name="twitter:description"
            content="The main motive behind each and every event DSC-AKGEC has conducted has always been spreading knowledge and giving inspiration to developers."
          />
          <meta
            name="twitter:image"
            content="https://images.app.goo.gl/UQrT9aN5vNwQWDMHA"
          />

          {/* Schema.org markup for Google+ */}
          <meta itemprop="name" content="DSC AKGEC Events" />
          <meta
            itemprop="description"
            content="The main motive behind each and every event DSC-AKGEC has conducted has always been spreading knowledge and giving inspiration to developers."
          />
          <meta
            itemprop="image"
            content="https://images.app.goo.gl/UQrT9aN5vNwQWDMHA"
          />
        </Helmet>

        <ShowcaseEvents theme={this.props.theme} />
        <EventsList theme={this.props.theme} />
        <Footer theme={this.props.theme} />
      </div>
    );
  }
}

export default Events;
