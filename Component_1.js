// Component_1.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

import data from '../json/Comp_1.json'; // Import the JSON data

export default class Component_1 extends Component {
  render() {
    return (
      <div>
        {/* Box */}
        <div className="box text-center">
          {data.items.map((item, index) => (
            <div key={index} className="box-item">
              <i className={item.icon}></i>
              <h6 className="box-title">{item.title}</h6>
              <p>{item.content}</p>
            </div>
          ))}
        </div>
        {/* End of Box */}
      </div>
    );
  }
}
