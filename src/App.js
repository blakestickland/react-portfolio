import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
    return (
        <Router basename={process.env.PUBLIC_URL + `/`}>
            <Header />
            <Wrapper>
                <Switch>
                    <Route exact path="/" component={About} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/portfolio" component={Portfolio} />
                </Switch>
            </Wrapper>
            <Footer />
        </Router>
    );
}

export default App;
