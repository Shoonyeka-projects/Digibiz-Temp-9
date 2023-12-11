// Component_8.js
import React, { Component } from 'react';

import dataComponent8 from '../json/Comp_8.json'; // Import the JSON data

export default class Component_8 extends Component {
  render() {
    return (
      <section id="testimonial">
        <div className="container">
          <h6 className="section-subtitle text-center">{dataComponent8.sectionSubtitle}</h6>
          <h6 className="section-title text-center mb-6">{dataComponent8.sectionTitle}</h6>
          <div className="row">
            {dataComponent8.testimonials.map((testimonial, index) => (
              <div key={index} className="col-md-6">
                <div className="testimonial-wrapper">
                  <div className="img-holder">
                    <img
                      src={testimonial.avatarSrc}
                      alt="Client Avatar"
                    />
                  </div>
                  <div className="body">
                    <p className="subtitle">{testimonial.testimonialText}</p>
                    <h6 className="title">{testimonial.clientName}</h6>
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
