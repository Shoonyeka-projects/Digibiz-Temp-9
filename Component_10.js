// Component_10.js
import React, { Component } from 'react';

import dataComponent10 from '../json/Comp_10.json'; // Import the JSON data

export default class Component_10 extends Component {
  render() {
    return (
      <div>
        <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
            <div className="modal-content">
              <iframe title={dataComponent10.modalTitle} width="100%" height="475" src="https://www.youtube.com/embed/TP4THzsAa3M" frameBorder="0" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
