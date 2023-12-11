// Component_12.js
import React, { Component } from 'react';
import dataComponent12 from '../json/Comp_12.json'; // Import the JSON data

export default class Component_12 extends Component {
  render() {
    return (
      <section id="contact">
        <div className="container">
          <div className="contact-card">
            <div className="infos">
              <h6 className="section-subtitle">{dataComponent12.sectionSubtitle}</h6>
              <h6 className="section-title mb-4">{dataComponent12.sectionTitle}</h6>

              {dataComponent12.contactInfos.map((info, index) => (
                <div key={index} className="item">
                  <i className={info.icon}></i>
                  <div>
                    <h5>{info.title}</h5>
                    <p>{info.content}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="form">
              <h6 className="section-subtitle">{dataComponent12.formSubtitle}</h6>
              <h6 className="section-title mb-4">{dataComponent12.formTitle}</h6>
              <form>
                {dataComponent12.formInputs.map((input, index) => (
                  <div key={index} className="form-group">
                    {input.type === "textarea" ? (
                      <textarea
                        name={input.id}
                        id={input.id}
                        cols="30"
                        rows={input.rows}
                        className="form-control form-control-lg"
                        placeholder={input.placeholder}
                      ></textarea>
                    ) : (
                      <input
                        type={input.type}
                        className="form-control form-control-lg"
                        id={input.id}
                        placeholder={input.placeholder}
                        required={input.required}
                      />
                    )}
                  </div>
                ))}
                <button type="submit" className="btn btn-primary btn-block btn-lg mt-3">
                  {dataComponent12.submitButton}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
