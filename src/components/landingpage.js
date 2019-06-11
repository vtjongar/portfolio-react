import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://live.staticflickr.com/65535/48004164547_bc80b56531_b.jpg"
              alt="avatar"
              className="avatar-img"
            />

            <div className="banner-text">
              <h1>web developer</h1>

              <hr />

              <p>
                html/css | bootsrap | javascript | react | nodeJS | expressJS | mongoDB
              </p>

              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/vanessa-tj-henderson/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                <a
                  href="https://github.com/vtjongar"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                <a
                  href="http://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-at" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
