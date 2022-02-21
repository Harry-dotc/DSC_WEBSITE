import React from "react";
import { Helmet } from "react-helmet";
//import css
import classes from "./Contact.module.css";
import classesDark from "./ContactDark.module.css";

// import component
import ShowcaseContact from "./ShowcaseContact/ShowcaseContact";
import Footer from "../UI/Footer/Footer";

class Contact extends React.Component {
  // componentDidMount() {
  //   var heightEle = document.querySelector(`.${classes.Contact}`).clientHeight;
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
      <div className={styles.Contact}>
        <Helmet>
          <title>DSC | AKGEC | Register</title>
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
        <ShowcaseContact theme={this.props.theme} />
        <Footer theme={this.props.theme} />
      </div>
    );
  }
}

export default Contact;
