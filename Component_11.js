
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import dataComponent11 from '../json/Comp_11.json'; // Import the JSON data

export default class Component_11 extends Component {
  render() {
    return (
      <section id="blog">
        <div className="container">
          <h6 className="section-subtitle text-center">{dataComponent11.sectionSubtitle}</h6>
          <h6 className="section-title mb-6 text-center">{dataComponent11.sectionTitle}</h6>

          <div className="row">
            {dataComponent11.blogPosts.map((post, index) => (
              <div key={index} className="col-md-4">
                <div className="card blog-post my-4 my-sm-5 my-md-0">
                  <img src={post.imageSrc} alt={`Blog Post ${index + 1}`} />
                  <div className="card-body">
                    <div className="details mb-3">
                      <a href="javascript:void(0)">
                        <i className="ti-comments"></i> {post.comments}
                      </a>
                      <a href="javascript:void(0)">
                        <i className="ti-eye"></i> {post.views}
                      </a>
                    </div>
                    <h5 className="card-title">{post.title}</h5>
                    <p>{post.content}</p>
                    <Link to={post.readMoreLink} className="d-block mt-3">
                      Read More...
                    </Link>
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
