import React from "react";

const Bio = () => {
    return (
        <div>
            <section className="bottomBorder pb-3">
                <h2 className="textGreen">About Me</h2>
            </section>
            
            
            <section className="container-bottom">
                <img    
                    className="float-left clearfix mr-3 my-3 about-img" 
                    src="Assets/Images/blake_stickland_headshot.jpg" 
                    alt="Web Developer Blake Stickland" 
                    max-width="300px" 
                    height="100%"
                />
                
                <span className="ml-4 p-3">
                    <br/>
                    <p>Full-Stack Web Developer with a desire to utilise my professional
                         experience, background, and new web development skills as
                          a Multimedia Programmer in the Arts. Recently earned a certificate
                           for Full-Stack Web Development from Monash University with skills
                            in JavaScript, HTML, CSS and Node.js.
                    </p>
                    <p>My passion for music led me to develop a strong background in delivering
                         technical skills and problem-solving as part of a team in a high-pressure
                          live event environment as a Sound Engineer. These abilities combine well
                           with the education to deliver exceptional client-focussed results.
                    </p>
                    <p>Engaging the end-user with a balance of clear, focussed design and well
                         implemented data are my aims for each project. I worked as a team of four
                          to deliver a recipe search solution that provides ten recipe and three wine
                           pairing suggestions based on any user-entered ingredient or taste
                            keywords. I am excited to apply my skills as part of a dynamic,
                             quality-driven team to create exceptional sites on the web.
                    </p>
                    <div className="resume-div">
                        <a className="nav-link"
                            href="../../../public/Assets/resume" 
                            target="_blank">
                            <i className="fa fa-file-pdf-o" style={{color: "red", fontSize:"34px"}}></i>
                            <label style={{marginLeft: "1rem"}}>Resume</label>
                        </a>
                    </div>
                </span>
            </section>
        </div>
    );
};

export default Bio;