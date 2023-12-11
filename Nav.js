import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [activeComponent, setActiveComponent] = useState('home');

  const handleLinkClick = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <nav className="navbar custom-navbar navbar-expand-lg navbar-dark" data-spy="affix" data-offset-top="20">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src="assets/imgs/logo.png" alt="Your Logo" />
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/" className={`nav-link ${activeComponent === 'home' ? 'active' : ''}`} onClick={() => handleLinkClick('home')}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className={`nav-link ${activeComponent === 'about' ? 'active' : ''}`} onClick={() => handleLinkClick('about')}>
              About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/service" className={`nav-link ${activeComponent === 'service' ? 'active' : ''}`} onClick={() => handleLinkClick('service')}>
              Service
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/portfolio" className={`nav-link ${activeComponent === 'portfolio' ? 'active' : ''}`} onClick={() => handleLinkClick('portfolio')}>
              Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/team" className={`nav-link ${activeComponent === 'team' ? 'active' : ''}`} onClick={() => handleLinkClick('team')}>
              Team
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/testimonial" className={`nav-link ${activeComponent === 'testimonial' ? 'active' : ''}`} onClick={() => handleLinkClick('testimonial')}>
              Testimonial
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className={`nav-link ${activeComponent === 'blog' ? 'active' : ''}`} onClick={() => handleLinkClick('blog')}>
              Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className={`nav-link ${activeComponent === 'contact' ? 'active' : ''}`} onClick={() => handleLinkClick('contact')}>
              Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

class Nav extends Component {
  render() {
    return (
      <div>
        <Navbar />
      </div>
    );
  }
}

export default Nav;
