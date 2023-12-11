// Component_6.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import dataComponent6 from '../json/Comp_6.json'; // Import the JSON data

export default class Component_6 extends Component {
  render() {
    return (
      <section id="team">
        <div className="container">
          <h6 className="section-subtitle text-center">{dataComponent6.sectionSubtitle}</h6>
          <h6 className="section-title mb-5 text-center">{dataComponent6.sectionTitle}</h6>
          <div className="row">
            {dataComponent6.teamMembers.map((member, index) => (
              <div key={index} className="col-sm-6 col-md-4">
                <div className="card text-center mb-4">
                  <img className="card-img-top inset" src={member.imgSrc} alt={member.name} />
                  <div className="card-body">
                    <h6 className="small text-primary font-weight-bold">{member.position}</h6>
                    <h5 className="card-title">{member.name}</h5>
                    <p>{member.role}</p>
                    <div className="socials">
                      {member.socialLinks.map((link, idx) => (
                        <Link key={idx} to={link.link}>
                          <i className={`ti-${link.platform.toLowerCase()}`}></i>
                        </Link>
                      ))}
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
