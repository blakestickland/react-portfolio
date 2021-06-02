import React from "react";
import GithubLogo from "../../assets/images/GitHub-Mark-120px-plus.png";
import LinkedInLogo from "../../assets/images/LI-Logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand navbar-light bg-light py-0 top-navigation fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header" >
                        <h1><Link className="navbar-brand bgGreen text-white clearfix"  id="navBrand" to="/">Blake Stickland</Link></h1>
                    </div>

                    <ul className="navbar-nav ml-auto"  role="navigation">

                        {/* The links of our navbar */}
                        <li className="nav-item active">
                            <Link className="nav-link" to="/about">About<span className="sr-only">(current)</span></Link>
                        </li>

                        <li className="nav-item verticalLine">
                            <Link className="nav-link" to="/portfolio">Portfolio</Link>
                        </li>

                        <li className="nav-item verticalLine">
                            <a className="nav-link" href="https://github.com/blakestickland" target="_blank"rel="noreferrer"><img src={GithubLogo} alt="GitHub Mark" height="22rem" /></a>
                        </li>

                        <li className="nav-item verticalLine">
                            <a className="nav-link" href="https://linkedin.com/in/blake-stickland" target="_blank"rel="noreferrer"><img src={LinkedInLogo} alt="LinkedIn Logo" height="20rem" /></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
