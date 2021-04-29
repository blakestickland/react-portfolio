import React, { Component } from "react";

class Resume extends Component {
    render() {
        return (
          <div className="resume-div">
              <a className="nav-link"
                  href="assets/resume/blake-stickland-web-developer-resume.pdf"
                //   href="Assets/resume/blake-stickland-web-developer-resume.pdf"
                  target="_blank"
                  download
                  >
                  <i className="fa fa-file-pdf-o" style={{color: "red", fontSize:"34px"}}></i>
                  <label style={{marginLeft: "1rem"}}>Resume</label>
              </a>
          </div>
        );
    };
};

export default Resume;