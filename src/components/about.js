import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="about-page">
        <div className="about-text">
          <h3 className="about-word" style={{ paddingBottom: "1em" }}>
            about
          </h3>

          <p
            className="about-paragraph"
            style={{
              width: "450",
              margin: "auto",
              paddingTop: "1em"
            }}
          >
            Hi, i'm vanessa. i've always had a thing for creativity. i love
            taking ideas and bringing them to life. throughout college i worked
            as a musician while learning as much as i could about computers. i
            started coding my freshmen year and have been hooked ever since.
            upon graduating, i knew i wanted to be a developer.
          </p>

          <p className="about-paragraph"
            style={{
              width: "450",
              margin: "auto",
              paddingTop: "1em"
            }}>
            Technology is beautiful. it makes our lives easier and solves
            problems across the entire globe. that's why i'm proud to call
            myself a developer. on top of that, i get to do what i love. create.
          </p>

          <p className="about-paragraph"
            style={{
              width: "450",
              margin: "auto",
              paddingTop: "1em"
            }}>
            Speaking of create, check out my work to see what i can do. visit my
            contact page if you'd like to build something cool with me.{" "}
          </p>
        </div>

        <img
          className="about-image"
          src="http://i67.tinypic.com/rhv72c.jpg"
          alt="avatar"
          style={{ height: "300px", width: "575px" }}
        />
      </div>
    );
  }
}

export default About;
