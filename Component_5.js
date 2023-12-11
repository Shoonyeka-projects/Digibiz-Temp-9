// Component_5.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import dataComponent5 from '../json/Comp_5.json'; // Import the JSON data

export default class Component_5 extends Component {
  render() {
    return (
      <section id="portfolio">
        <div className="container text-center">
          <h6 className="section-subtitle">{dataComponent5.sectionSubtitle}</h6>
          <h6 className="section-title mb-5">{dataComponent5.sectionTitle}</h6>
          <div className="row">
            {dataComponent5.projects.map((project, index) => (
              <div key={index} className="col-sm-4">
                <div className="img-wrapper">
                  <img src={project.imgSrc} alt={`Project ${index + 1}`} />
                  <div className="overlay">
                    <div className="overlay-infos">
                      <h5>{project.title}</h5>
                      <Link to={project.link}>
                        <i className="ti-zoom-in"></i>
                      </Link>
                      <a href="javascript:void(0)">
                        <i className="ti-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}
