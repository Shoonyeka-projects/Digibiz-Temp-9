// Component_2.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import dataAbout from '../json/Comp_2.json'; // Import the JSON data

export default class Component_2 extends Component {
  render() {
    return (
      <section id="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5 col-lg-4">
              <img src="assets/imgs/about.jpg" alt="Download free bootstrap 4 landing page, free bootstrap 4 templates, Download free bootstrap 4.1 landing page, free bootstrap 4.1.1 templates, Creative studio Landing page" className="w-100 img-thumbnail mb-3" />
            </div>
            <div className="col-md-7 col-lg-8">
              <h6 className="section-subtitle mb-0">{dataAbout.sectionSubtitle}</h6>
              <h6 className="section-title mb-3">{dataAbout.sectionTitle}</h6>
              {dataAbout.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
