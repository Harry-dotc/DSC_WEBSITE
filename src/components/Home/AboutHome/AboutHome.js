import React from "react";

// import CSS
import classes from "./AboutHome.module.css";
import classesDark from "./AboutHomeDark.module.css";

// import image
import about from "../../../assets/images/aboutUS.png";
import appDevelopment from "../../../assets/images/appDevelopment.svg";
import webDevelopment from "../../../assets/images/webDevelopment.svg";
import machineLearning from "../../../assets/images/Background_1.svg";
import management from "../../../assets/images/management.svg";

const AboutHome = (props) => {
  let styles = classes;
  if (props.theme) {
    styles = classes;
  } else {
    styles = classesDark;
  }
  const redHeader = [styles.red, styles.cardHeader];
  const blueHeader = [styles.blue, styles.cardHeader];
  const greenHeader = [styles.green, styles.cardHeader];
  const yellowHeader = [styles.yellow, styles.cardHeader];

  return (
    <>
      <div className={styles.container}>
        <div className={styles.AboutHome}>
          <div>
            <h2>
              What does&nbsp;<strong>DSC-AKGEC</strong> do?
            </h2>
            <p>
              We at
              <strong>&nbsp;DSC-AKGEC&nbsp;</strong>
              are a passionate group of people who work towards bringing a
              change in the ecosystem of development around the campus. We want
              to create a healthy environment for the budding developers to
              exploring solutions to real life problems and promote the
              <strong>&nbsp;developer culture</strong>.
            </p>
            <img src={about} className={styles.AboutHomeImg} alt="" />
          </div>
        </div>
        <div className={styles.Domains}>
          <h2>Fields we work in</h2>
          <div className={styles.card}>
            <div>
              <div className={styles.cardBody}>
                <h3 className={blueHeader.join(" ")}>Web Development</h3>
                <p className={styles.cardText}>
                  In this domain, we concentrate on developing and maintaining
                  websites to solve real time problems. For any website, it's
                  the work that happens behind the scenes to make a website look
                  great, work fast and perform well with a seamless user
                  experience.
                </p>
              </div>
              <img
                src={webDevelopment}
                alt="Web Development"
                className={styles.DomainsImg}
              />
            </div>
          </div>
          <div className={styles.card}>
            <div>
              <div className={styles.cardBody}>
                <h3 className={redHeader.join(" ")}>Machine Learning</h3>
                <p className={styles.cardText}>
                  Machine learning is the burning topic of the market. It is an
                  application of artificial intelligence (AI) that provides
                  systems, the ability to automatically learn and improve from
                  experience without being explicitly programmed.
                </p>
              </div>
              <img
                src={machineLearning}
                alt="Machine Learning"
                className={styles.DomainsImg}
              />
            </div>
          </div>
          <div className={styles.card}>
            <div>
              <div className={styles.cardBody}>
                <h3 className={yellowHeader.join(" ")}>App Development</h3>
                <p className={styles.cardText}>
                  Mobile app development has been steadily growing, in revenues
                  and jobs created. In this domain and all others, we encourage
                  all to keep practising and be their best selves.
                </p>
              </div>
              <img
                src={appDevelopment}
                alt="App Development"
                className={styles.DomainsImg}
              />
            </div>
          </div>
          <div className={styles.card}>
            <div>
              <div className={styles.cardBody}>
                <h3 className={greenHeader.join(" ")}>Management</h3>
                <p className={styles.cardText}>
                  For the growth of all and to bring chances for all the domains
                  to excel and also develop teamwork skills, we provide
                  managerial domain to increase the productivity of all our
                  members by being the face of this society and bring forth new
                  projects.
                </p>
              </div>
              <img
                src={management}
                alt="Management"
                className={styles.DomainsImg}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutHome;
