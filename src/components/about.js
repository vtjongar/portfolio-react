import React, { Component } from "react";
import { Link } from "react-router-dom";

class About extends Component {
  render() {
    return (
      <div>
        <h3 className="about-word" style={{ paddingBottom: "1em" }}>
          Hello, I'm Vanessa
        </h3>
        <div className="about-page">
          <img
            className="about-image"
            src="http://i67.tinypic.com/rhv72c.jpg"
            alt="avatar"
            style={{ height: "300px", width: "575px" }}
          />
          <div className="about-text">
            <p
              className="about-paragraph-first"
              style={{
                margin: "auto",
                paddingTop: "1em"
              }}
            >
              I've always loved creating new things. I enjoy taking ideas and
              bringing them to life.
            </p>

            <p
              className="about-paragraph"
              style={{
                margin: "auto",
                paddingTop: "1em"
              }}
            >
              Throughout college, I worked as a musician while learning as much
              as I could about
            </p>

            <p
              className="about-paragraph"
              style={{
                margin: "auto",
                paddingTop: "1em",
               
              }}
            >
              computers. I started coding my freshmen year and have been hooked
              ever since.
            </p>

            <p
              className="about-paragraph"
              style={{
                margin: "auto",
                paddingTop: "1em",
                paddingBottom: "1em"
              }}
            >
              Upon graduating, I knew I wanted to work in software development.
            </p>

            <p
              className="about-paragraph"
              style={{
                margin: "auto",
                paddingTop: "1em"
              }}
            >
              Technology is beautiful. It makes our lives easier and solves all
              kinds of crazy
            </p>

            <p
              className="about-paragraph"
              style={{
                margin: "auto",
                paddingTop: "1em"
              }}
            >
              problems across the globe. That's why i'm proud to be starting a
              career as a
            </p>

            <p
              className="about-paragraph"
              style={{
                margin: "auto",
                paddingTop: "1em",
                paddingBottom: "1em"
              }}
            >
              developer.
            </p>

            <p
              className="about-paragraph"
              style={{
                margin: "auto",
                paddingTop: "1em"
              }}
            >
              I'm excited to build applications that make a difference. On top
              of that, I get to do 
              </p>
              <p
              className="about-paragraph"
              style={{
                margin: "auto",
                paddingTop: "1em"
              }}
            > 
            what I love. Create. Speaking of create...
            check out my <Link to="/work"><span>work</span></Link> to see what I can do. </p>
              
              
            <p
              className="about-paragraph-last"
              style={{
                margin: "auto",
                paddingTop: "1em"
              }}
            > 
              Visit my <Link to="/contact"><span>contact</span></Link>  page if
              you'd like to build something cool with me.
              </p>
            
          </div>
        </div>
      </div>
    );
  }
}

export default About;
