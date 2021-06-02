import React, { Component } from "react";
import Project from "../components/Project";
import projects from "../projects.json";

class Portfolio extends Component {
// Setting this.state.projects to the projects json array
  state = {
    projects
  };

  photo;

  render() {
      return (
        <main style={{margin: "4% auto", alignItems:"center"}}>
      
          <div className="container bg-white p-4">
            
              <section className="bottomBorder pb-3">
                <h2 className="textGreen">Portfolio</h2>
              </section>
  
              <div className="container my-3 bg-white pb-4 mb-4">
                <div className="row">
                  {this.state.projects.map(project => (
                      <Project 
                          key={project.id}
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

          </div>

        </main>
      );
  };
};

export default Portfolio;