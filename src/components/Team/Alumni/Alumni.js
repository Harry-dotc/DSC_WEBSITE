import React from "react";
import { Helmet } from "react-helmet";

// import css
import classes from "./Alumni.module.css";
import classesDark from "./AlumniDark.module.css";

//import Component
import ShowcaseAlumni from "./ShowcaseAlumni/ShowcaseAlumni";
// import Accordion from "../../UI/Accordion/Accordion";

import AlumniList from "./AlumniList/AlumniList";
import Footer from "../../UI/Footer/Footer";

class Alumni extends React.Component {
  // componentDidMount() {
  //   var heightEle = document.querySelector(`.${classes.Team}`).clientHeight;
  //   // console.log(heightEle);
  //   this.props.setHeight(heightEle);
  // }

  // state = {
  //     isActive: false,
  // };

  render() {
    let styles = classes;
    if (this.props.theme) {
      styles = classes;
    } else {
      styles = classesDark;
    }
    return (
      <div className={styles.Alumni}>
        <Helmet>
          <title>DSC | AKGEC | Alumni</title>
          <meta
            name="description"
            content="Developer Student Clubs AKGEC Alumni"
          />
          <meta property="og:title" content="DSC AKGEC" />
          <meta property="og:type" content="team.members.sociallinks" />
          <meta property="og:url" content="https://dscakgec.org/team" />
          <meta
            property="og:image"
            content="https://images.app.goo.gl/UQrT9aN5vNwQWDMHA"
          />
          <meta
            property="og:description"
            content="Every member of the society has always been passionate and hard working towards their goal, creating a positive work environment. Their support and will to help each other out in every way possible is what makes DSC-AkGEC a ‘team’."
          />
          {/* Twitter Card data */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@dsc_akgec" />
          <meta name="twitter:account_id" content="1180336578507370496" />
          <meta name="twitter:title" content="DSC AKGEC Alumni" />
          <meta
            name="twitter:description"
            content="Every member of the society has always been passionate and hard working towards their goal, creating a positive work environment. Their support and will to help each other out in every way possible is what makes DSC-AkGEC a ‘team’."
          />
          <meta
            name="twitter:image"
            content="https://images.app.goo.gl/UQrT9aN5vNwQWDMHA"
          />

          {/* Schema.org markup for Google+ */}
          <meta itemprop="name" content="DSC AKGEC Alumni" />
          <meta
            itemprop="description"
            content="Every member of the society has always been passionate and hard working towards their goal, creating a positive work environment. Their support and will to help each other out in every way possible is what makes DSC-AkGEC a ‘team’."
          />
          <meta
            itemprop="image"
            content="https://images.app.goo.gl/UQrT9aN5vNwQWDMHA"
          />
        </Helmet>

        <ShowcaseAlumni theme={this.props.theme} />
        <AlumniList theme={this.props.theme} />
        {/* <Accordion theme={this.props.theme} /> */}
        <Footer theme={this.props.theme} />
      </div>
    );
  }
}

export default Alumni;
