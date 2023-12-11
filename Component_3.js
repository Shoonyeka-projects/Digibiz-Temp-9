// Component_3.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import dataComponent3 from '../json/Comp_3.json'; // Import the JSON data

export default class Component_3 extends Component {
  render() {
    return (
      <section className="has-bg-img py-md">
        <div className="container text-center">
          <h6 className="section-subtitle">{dataComponent3.sectionSubtitle}</h6>
          <h6 className="section-title mb-6">{dataComponent3.sectionTitle}</h6>
          <div className="widget mb-4">
            {dataComponent3.widgets.map((widget, index) => (
              <div key={index} className="widget-item">
                <i className={widget.icon}></i>
                <h4>{widget.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}
