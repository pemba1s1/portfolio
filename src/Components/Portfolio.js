import React, { Component } from "react";
import Fade from "react-reveal";

let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;

      return (
        <div key={id++} className="six portfolio-item portfolio">
          <div className="item-wrap">
            <img alt={projects.title} src={projectImage} className="image-project"/>
            <div className="project-desc">
              <div className="project-title"><b>{projects.title}</b></div>
              <div className="project-description">{projects.description}</div>
              <div className="itemtech">
                {projects.techStack.map((tech) => {
                  return <p className="tech" key={id++}>{tech}</p>;
                })}
              </div>
              <div className="flex">
                {projects.url && <a href={projects.url} target="_blank" rel="noreferrer"><i className="fa fa-link" style={{fontSize: "25px", color: "black"}}></i></a> }
                {projects.gitUrl && <a href={projects.gitUrl} target="_blank" rel="noreferrer"><i className="fa fa-github" style={{fontSize: "25px", color: "black"}}></i></a> }
              </div>
            </div>
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <center><h2>Check Out Some of My Works.</h2></center>
              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf project-item"
              >
                {projects}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
