import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
class Landing extends Component {
  render() {
    return (

      <div style={{ width: "100%", margin: "auto" }}>
       
        <Grid className="landing-grid">
          <Cell col={12}>
            <img className="image"
              src="https://live.staticflickr.com/65535/48004164547_bc80b56531_b.jpg"
              alt="avatar"
              
            />

            <div>
              <h1 className="role">web developer</h1>

       

              <h6 className="skills">
                html/css | bootsrap | javascript | react | nodeJS | expressJS | mongoDB
              </h6>

              <div className="social-links">
                <a className="linkedin-icon"
                  href="https://www.linkedin.com/in/vanessa-tj-henderson/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                <a className="github-icon"
                  href="https://github.com/vtjongar"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                <a className="email-icon"
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
