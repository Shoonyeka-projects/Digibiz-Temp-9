
import React, { Component } from 'react';

import dataComponent7 from '../json/Comp_7.json'; // Import the JSON data

export default class Component_7 extends Component {
  render() {
    return (
      <section className="has-bg-img bg-img-2">
        <div className="container text-center">
          <h6 className="section-subtitle">{dataComponent7.sectionSubtitle}</h6>
          <h6 className="section-title mb-6">{dataComponent7.sectionTitle}</h6>
          <div className="widget-2">
            {dataComponent7.funFacts.map((fact, index) => (
              <div key={index} className="widget-item">
                <i className={fact.icon}></i>
                <h6 className="title">{fact.title}</h6>
                <div className="subtitle">{fact.subtitle}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}
