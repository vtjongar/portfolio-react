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
              let's build something amazing together!
            </h2>
            <img className="thinking-image" src="/images/think2.png" style={{ height: "200px", width: "200px" }}/>
            <p
              style={{
                width: "75%",
                margin: "auto",
                paddingTop: "1em",
                color: "white"
              }}
            >
              "At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio."
            </p>
          </Cell>
          <Cell className="list" col={6}>
            <h2 className="contact">contact</h2>
            <hr />

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "20px", fontFamily: "Montserrat", color: "#A5A5A5" }}
                  >
                    <i
                      className="fa fa-at"
                      aria-hidden="true"
                      style={{ fontSize: "35px"}}

                    />
                    vanessatjhenderson@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "20px", fontFamily: "Montserrat", color: "#A5A5A5" }}
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
