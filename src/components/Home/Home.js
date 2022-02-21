import React, { Component } from "react";
import { Helmet } from "react-helmet";

//import css
import classes from "./Home.module.css";

// components Import
import ShowcaseHome from "./ShowcaseHome/ShowcaseHome";
import AboutHome from "./AboutHome/AboutHome";
import EventsHome from "./EventsHome/EventsHome";
import ProjectsHome from "./ProjectsHome/ProjectsHome";
import Newsletter from '../UI/NewsLetter/Newsletter';
// import BlogHome from "./BlogHome/BlogHome";
import TeamHome from "./TeamHome/TeamHome";
import Footer from "../UI/Footer/Footer";
import MapComponent from "./MapComponent/MapComponent";

class Home extends Component {
  // componentDidMount() {
  //   var heightEle = document.querySelector(`.${classes.Home}`).clientHeight;
  //   // console.log(heightEle);
  //   this.props.setHeight(heightEle);
  // }

  render() {
    return (
      <div className={classes.Home}>
        <Helmet>
          <title>DSC | AKGEC</title>
          <meta
            name="description"
            content="Developer Student Clubs Ajay Kumar Garg Engineering College Ghaziabad"
          />
          <meta
            name="keywords"
            content="DSC AKGEC, Events, Machine Learning, Web Development, App Development "
          />
          <meta property="og:title" content="DSC AKGEC" />
          <meta
            property="og:type"
            content="about.domains.events.projects.team.location"
          />
          <meta property="og:url" content="https://dscakgec.org/" />
          <meta
            property="og:image"
            content="https://images.app.goo.gl/UQrT9aN5vNwQWDMHA"
          />
          <meta
            property="og:description"
            content="We at DSC-AKGEC are a passionate group of people who work towards bringing a change in the ecosystem of development around the campus. We want to create a healthy environment for the budding developers to exploring solutions to real life problems and promote the developer culture."
          />

          {/* Twitter Card data */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@dsc_akgec" />
          <meta name="twitter:account_id" content="1180336578507370496" />
          <meta name="twitter:title" content="DSC AKGEC" />
          <meta
            name="twitter:description"
            content="We at DSC-AKGEC are a passionate group of people who work towards bringing a change in the ecosystem of development around the campus. We want to create a healthy environment for the budding developers to exploring solutions to real life problems and promote the developer culture."
          />
          <meta
            name="twitter:image"
            content="https://images.app.goo.gl/UQrT9aN5vNwQWDMHA"
          />

          {/* Schema.org markup for Google+ */}
          <meta itemprop="name" content="DSC AKGEC" />
          <meta
            itemprop="description"
            content="We at DSC-AKGEC are a passionate group of people who work towards bringing a change in the ecosystem of development around the campus. We want to create a healthy environment for the budding developers to exploring solutions to real life problems and promote the developer culture."
          />
          <meta
            itemprop="image"
            content="https://images.app.goo.gl/UQrT9aN5vNwQWDMHA"
          />
        </Helmet>

        <ShowcaseHome theme={this.props.theme} />
        <AboutHome theme={this.props.theme} />
        <EventsHome theme={this.props.theme} />
        <ProjectsHome theme={this.props.theme} />
        {/* <BlogHome theme={this.props.theme} /> */}
        <TeamHome theme={this.props.theme} />
        <Newsletter theme={this.props.theme} />
        <MapComponent theme={this.props.theme} />
        <Footer theme={this.props.theme} />
      </div>
    );
  }
}

export default Home;
