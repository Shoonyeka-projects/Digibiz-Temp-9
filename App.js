import React from 'react';
import { BrowserRouter as BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/common/Header';
import Footer from './components/common/Footer';

import Home from "./pages/Home";
import About from './pages/About';
import Service from './pages/Service';
import Team from './pages/Team';
import Portfolio from './pages/Portfolio';
import Testimonial from './pages/Testimonial';
import BLog from './pages/BLog';
import Contact from './pages/Contact';

export default function App() {
    return (
        <BrowserRouter basename="/">
            <Header />
            <Switch>
                <Route exact path={`${process.env.PUBLIC_URL + "/"}`} component={Home} />
                <Route exact path={`${process.env.PUBLIC_URL + "/about"}`} component={About} />
                <Route exact path={`${process.env.PUBLIC_URL + "/service"}`} component={Service} />
                <Route exact path={`${process.env.PUBLIC_URL + "/team"}`} component={Team} />
                <Route exact path={`${process.env.PUBLIC_URL + "/portfolio"}`} component={Portfolio} />
                <Route exact path={`${process.env.PUBLIC_URL + "/testimonial"}`} component={Testimonial} />
                <Route exact path={`${process.env.PUBLIC_URL + "/blog"}`} component={BLog} />
                <Route exact path={`${process.env.PUBLIC_URL + "/contact"}`} component={Contact} />
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}