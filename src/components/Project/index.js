import React from "react";
import GithubLogo from "../../assets/images/GitHub-Mark-Light-120px-plus.png";
// import imageMe from "../../assets/images/work-day-calendar-screenshot.png";

const Project = (props) => {
    const {titleProject, hrefDeployedProject, srcProjectImg, altProjectImg,  descriptionProject, hrefProjectRepo, id} = props;
    var myImage = srcProjectImg;
    console.log(myImage.toString(), srcProjectImg.toString());
    return (
        <div className="col-sm-12 col-md-6 col-lg-3 mb-4" key={id}>
            <div className="card">

                <a href={hrefDeployedProject}
                className="card-img-border" 
                target="_blank"
                rel="noreferrer">
                    <img 
                    className="card-img-top card-img-dimensions" 
                    src={`${process.env.PUBLIC_URL}/${srcProjectImg}`} 
                    // src={require(`./${srcProjectImg}`).default}
                    alt={altProjectImg}
                    />
                </a>

                <div className="card-body">
                    <h5 className="card-title text-center">{titleProject}</h5>
                    <p className="card-text text-justify">
                        {descriptionProject}
                    </p>
                </div>
                <a 
                href={hrefProjectRepo}
                className="btn bgGreen text-white" 
                target="_blank"
                rel="noreferrer">
                    <h6>{titleProject}</h6>
                    <img 
                        src={GithubLogo}
                        alt="GitHub Mark"
                        height="22rem" 
                        style={{marginLeft:"3%"}}
                        />
                </a>
            </div>
        </div>

    );
}

export default Project;