import React from "react";

const Header = () => {
    return (
        <div>
            <div className="navbar-header" >
                <h1><a className="navbar-brand bgGreen text-white clearfix"  id="navBrand" href="/">Blake Stickland</a></h1>
            </div>

            <ul className="navbar-nav ml-auto"  role="navigation">

                {/* The links of our navbar */}
                <li className="nav-item active">
                    <a className="nav-link" href="/">About<span className="sr-only">(current)</span></a>
                </li>

                <li className="nav-item verticalLine">
                    <a className="nav-link" href="portfolio.html">Portfolio</a>
                </li>

                <li className="nav-item verticalLine">
                    <a className="nav-link" href="contact.html">Contact</a>
                </li>

                <li className="nav-item verticalLine">
                    <a className="nav-link" href="https://github.com/blakestickland" target="_blank"rel="noreferrer"><img src="Assets/Images/GitHub-Mark-120px-plus.png" alt="GitHub Mark" height="22rem" /></a>
                </li>

                <li className="nav-item verticalLine">
                    <a className="nav-link" href="https://linkedin.com/in/blake-stickland-7bbb4a1ba" target="_blank"rel="noreferrer"><img src="Assets/Images/LI-Logo.png" alt="LinkedIn Logo" height="20rem" /></a>
                </li>
            </ul>
        </div>
    );
};

export default Header;
