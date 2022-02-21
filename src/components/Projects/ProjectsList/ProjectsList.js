import React from "react";

//import css
import classes from "./ProjectsList.module.css";
import classesDark from "./ProjectsListDark.module.css";

//import component
import ProjectCard from "../ProjectCard/ProjectCard";

//import project data
import { ProjectData } from "../ProjectData";

const ProjectsList = (props) => {
  let styles = classes;
  if (props.theme) {
    styles = classes;
  } else {
    styles = classesDark;
  }

  const renderList = ProjectData.map((data, index) => {
    if (index % 2 === 0) {
      return (
        <ProjectCard
          key={data.id}
          order={true}
          cardHeader={data.name}
          cardTags={data.tags}
          members={data.members}
          cardText={data.description}
          links={data.links}
          image={data.image}
          theme={props.theme}
        />
      );
    }
    return (
      <ProjectCard
        order={false}
        key={data.id}
        cardHeader={data.name}
        cardTags={data.tags}
        members={data.members}
        cardText={data.description}
        links={data.links}
        image={data.image}
        theme={props.theme}
      />
    );
  });
  return (
    <div className={styles.ProjectsList}>
      <div className={styles.Container}>{renderList}</div>
    </div>
  );
};

export default ProjectsList;
