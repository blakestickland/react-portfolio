import React, { Component } from "react";
import Project from "../components/Project";
import projects from "../projects.json";

class Portfolio extends Component {
// Setting this.state.projects to the projects json array
  state = {
    projects
  };

  render() {
      return (
          <div className="container my-3 bg-white container-bottom">
              <div className="row">
                {this.state.projects.map(project => (
                    <Project 
                        hrefDeployedProject={project.hrefDeployedProject}
                        srcProjectImg={project.srcProjectImg} 
                        altProjectImg={project.altProjectImg}
                        titleProject={project.titleProject}
                        descriptionProject={project.descriptionProject}
                        hrefProjectRepo={project.hrefProjectRepo} 
                    />
                ))};
              </div>     
          </div>
      );
  };
};

export default Portfolio;