// Component_9.js
import React, { Component } from 'react';

import dataComponent9 from '../json/Comp_9.json'; // Import the JSON data

export default class Component_9 extends Component {
  render() {
    return (
      <section className="has-bg-img py-lg">
        <div className="container text-center">
          <button
            type="button"
            className="btn btn-outline-primary play-control"
            data-toggle="modal"
            data-target="#exampleModalCenter"
          >
            <i className={dataComponent9.buttonIcon}></i>
          </button>
          <h6 className="section-title mt-4">{dataComponent9.sectionTitle}</h6>
        </div>
      </section>
    );
  }
}
