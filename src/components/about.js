import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="about-page"> 
      <div className="about-text">
      <h3 className="about-word"  style={{ paddingBottom: "1em" }}>about</h3>


<p className="about-paragraph" style={{ width: "75%", margin: "auto", paddingTop: "1em", paddingBottom: "10em" }}>
        
        
        a web developer and musician from  
        At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti atque corrupti quos
        dolores et quas molestias excepturi sint occaecati cupiditate non
        provident, similique sunt in culpa qui officia deserunt mollitia
        animi, id est laborum et dolorum fuga. 
      </p>
        
      </div>
     
        <img className="about-image"
              src="http://i67.tinypic.com/rhv72c.jpg"
              alt="avatar"
              style={{ height: "300px", width: "575px" }}
            />
        
      </div>

      
    );
  }
}

export default About;
