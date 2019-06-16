import React, { Component } from "react";
import { Link } from "react-router-dom";

class About extends Component {
  render() {
    return (
      <div>
        <h3 className="about-word" style={{ paddingBottom: "1em" }}>
          Allow me to introduce myself
        </h3>
        <div className="about-page">
        <img
            className="about-image"
            src="https://live.staticflickr.com/65535/48004164547_bc80b56531_b.jpg"
            alt="avatar"
            style={{ height: "290px", width: "200px" }}
          />
          <div className="about-text">
          <p
              className="about-paragraph-first"
              style={{
                margin: "auto",
                paddingTop: "1em"
              }}
            >
              Hello, I'm Vanessa! I've always loved creating new things. I enjoy taking ideas and bringing them to life.

Throughout college, I worked as a musician while learning as much as I could about

computers. I started coding my freshmen year and have been hooked ever since.

Upon graduating, I knew I wanted to work in software development.
</p>
<p
              className="about-paragraph-first"
              style={{
                margin: "auto",
                paddingTop: "1em"
              }}
            >


Technology is beautiful. It makes our lives easier and solves all kinds of crazy

problems across the globe. That's why i'm proud to be starting a career as a

developer.

I'm excited to build applications that make a difference. On top of that, I get to do

what I love. Create.
              </p>
              
              
            <p
              className="about-paragraph-2nd-to-last"
              style={{
                margin: "auto",
                paddingTop: "2em"
              }}
            > 
            Speaking of create...
            check out some of my {" "}<Link to="/work"><span>side projects</span></Link> {" "}to see what I can do.

            </p>

            <p
              className="about-paragraph-last"
              style={{
                margin: "auto",
     
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
