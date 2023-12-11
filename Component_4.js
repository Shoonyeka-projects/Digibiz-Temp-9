// Component_4.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import dataComponent4 from '../json/Comp_4.json'; // Import the JSON data

export default class Component_4 extends Component {
  render() {
    return (
      <section id="service">
        <div className="container">
          <h6 className="section-subtitle text-center">{dataComponent4.sectionSubtitle}</h6>
          <h5 className="section-title text-center mb-6">{dataComponent4.sectionTitle}</h5>
          <div className="row">
            {dataComponent4.cards.map((card, index) => (
              <div key={index} className="col-sm-4 col-md-3">
                <div className="card mb-4">
                  <div className="card-body">
                    <h2 className="mb-4"><i className={`text-primary ${card.icon}`}></i></h2>
                    <h6 className="card-title">{card.title}</h6>
                    <p>{card.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Example of Link component to navigate to a different section or page */}
          <Link to="/about" className="btn btn-primary">Learn More About Us</Link>
        </div>
      </section>
    );
  }
}
