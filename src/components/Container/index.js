import React from "react";
import Header from "../Header/index"
import Bio from "../Bio"
import Footer from "../Footer"

const Container = () => {
    return (
        <div>
            <nav className="navbar navbar-expand navbar-light bg-light py-0 top-navigation fixed-top">
                <div className="container-fluid">
                    <Header />
                </div>
            </nav>
            <div className="container bg-white p-4 wrapper" style={{maxWidth: "640px", margin: "4% auto"}}>
                <Bio />
            </div>
            <div className="footer fixed-bottom"> 
                <Footer />
            </ div>
        </div>
    );
};

export default Container;
