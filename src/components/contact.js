import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import { isWhiteSpaceLike } from "typescript";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell className="contact-paragraph" col={6}>
            <h2 style={{ color: "white" }}>
              let's build something amazing together
            </h2>
            <img
              className="thinking-image"
              src="/images/idea.png"
              style={{ height: "200px", width: "200px" }}
            />
            <div
              className="quote"
              style={{
                width: "350px",
                margin: "auto",
                paddingTop: "1em",
                color: "white"
              }}
            >
              <p style={{ fontSize: "20" }}> "Creativity is inventing, </p>
              <p style={{ fontSize: "20" }}> experimenting, growing, </p>
              <p style={{ fontSize: "20" }}>taking risks, breaking rules,</p>
              <p style={{ fontSize: "20" }}>making mistakes, </p>
              <p style={{ fontSize: "20" }}>and having fun"</p>
            </div>
          </Cell>
          <Cell className="list" col={6}>
            <h2
              className="contact"
              style={{ fontFamily: "Poiret One", color: "#F2EFE2" }}
            >
              contact
            </h2>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{
                      fontSize: "20px",
                      fontFamily: "Poiret One",
                      color: "#F2EFE2"
                    }}
                  >
                    <i
                      className="fa fa-at"
                      aria-hidden="true"
                      style={{ fontSize: "35px" }}
                    />
                    vanessatjhenderson@gmail.com
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{
                      fontSize: "20px",
                      fontFamily: "Poiret One",
                      color: "#F2EFE2"
                    }}
                  >
                    <i
                      className="fa fa-skype"
                      aria-hidden="true"
                      style={{ fontSize: "40px" }}
                    />
                    live:vanessatjhenderson
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Contact;
