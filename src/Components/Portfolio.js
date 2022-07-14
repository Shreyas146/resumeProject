import React from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";

const Portfolio = (props) => {
  const { data } = props
  if (!Object.keys(data).length) return null;
  const projects = data.projects.map((project,index) => {
    let projectImage = "images/portfolio/" + project.image;

    return (
      <div key={index} className="columns portfolio-item">
        <div className="item-wrap">
          <Zmage alt={project.title} src={projectImage} />
          <div style={{ textAlign: "center" }}>{project.title}</div>
        </div>
      </div>
    );
  });
  return(
    <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some of My Works.</h1>

              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {projects}
              </div>
            </div>
          </div>
        </Fade>
      </section>
  )

}


export default Portfolio;
