import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

//import css
import classes from "./Layout.module.css";
import classesDark from "./LayoutDark.module.css";

// import component
import Navbar from "../Navigation/Navbar/Navbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import Home from "../Home/Home";
import Events from "../Events/Events";
import Contact from "../Contact/Contact";
import Team from "../Team/Team";
import Alumni from '../Team/Alumni/Alumni'
import Projects from "../Projects/Projects";
import Blog from "../Blog/Blog";
import ScrollToTop from "../../ScrollToTop";
import EmailVerify from "../EmailVerify/EmailVerify";
import Otp from "../OTP/otp";
// import Footer from "../UI/Footer/Footer";

class Layout extends Component {
  state = {
    theme: true,
    styles: classes,
  };

  constructor(props) {
    super(props);
    this.themeToggler = this.themeToggler.bind(this);
  }

  componentDidMount() {
    if (localStorage.getItem("theme") === null) {
      localStorage.setItem("theme", "true");
    } else {
      if (localStorage.getItem("theme") === "true") {
        this.setState({ theme: true });
        this.setState({ styles: classes });
      } else {
        this.setState({ theme: false });
        this.setState({ styles: classesDark });
      }
    }
  }

  themeToggler() {
    this.state.theme === true
      ? this.setState({ theme: false })
      : this.setState({ theme: true });

    if (this.state.theme === true) {
      localStorage.setItem("theme", "false");
    } else {
      localStorage.setItem("theme", "true");
    }

    if (this.state.theme) {
      this.setState({ styles: classesDark });
    } else {
      this.setState({ styles: classes });
    }
  }

  render() {
    return (
      <>
        <div>
          <Navbar switchTheme={this.themeToggler} theme={this.state.theme} />
          <SideDrawer
            switchTheme={this.themeToggler}
            theme={this.state.theme}
          />
          <ScrollToTop />
        </div>
        <div
          className={this.state.styles.Layout}
          // style={{ height: this.state.heightStyle }}
        >
          <Route
            render={({ location }) => (
              <TransitionGroup component={null}>
                <CSSTransition
                  key={location.key}
                  timeout={450}
                  classNames="fade"
                >
                  <Switch location={location}>
                    <Route
                      path="/"
                      exact
                      component={() => <Home theme={this.state.theme} />}
                    />
                    <Route
                      path="/events"
                      component={() => <Events theme={this.state.theme} />}
                    />
                    <Route
                      path="/projects"
                      component={() => <Projects theme={this.state.theme} />}
                    />
                    <Route
                      path="/blog"
                      component={() => <Blog theme={this.state.theme} />}
                    />
                    <Route
                      path="/team"
                      component={() => <Team theme={this.state.theme} />}
                    />
                    <Route
                      path="/alumni"
                      component={() => <Alumni theme={this.state.theme} />}
                    />
                    {/* <Route
                      path="/register"
                      component={() => <EmailVerify theme={this.state.theme} />}
                    />
                    <Route
                      path="/otp"
                      component={() => <Otp theme={this.state.theme} />}
                    />
                    <Route
                      path="/details"
                      component={() => <Contact theme={this.state.theme} />}
                    /> */}
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )}
          />
        </div>
      </>
    );
  }
}

export default Layout;
