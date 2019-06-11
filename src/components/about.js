import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="about-page"> 
        <img className="about-image"
              src="http://i67.tinypic.com/rhv72c.jpg"
              alt="avatar"
              style={{ height: "200px", width: "380px" }}
            />
        <div className="about-text">
       

<p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              "At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio."
            </p>
            </div>
      </div>

      
    );
  }
}

export default About;
