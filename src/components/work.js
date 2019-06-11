import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle className="card-title"
              style={{
                color: "#000",
                height: "200px",

                background:
                  "url(https://live.staticflickr.com/65535/48044340947_a427193d76_b.jpg) center / cover"
            
              }}
            >
              Hangman
            </CardTitle>
            <CardText>
              I designed this app based on the Hangman game.
              <br />
              <br />
              Stack: HTML/CSS/Vanilla Javascript
            </CardText>
            <CardActions border>
              <Button colored>GitHub Repo</Button>
              <Button colored>Live</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>

            </CardMenu>
          </Card>

          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "fff",
                height: "200px",
                background:
                  "url(https://live.staticflickr.com/65535/48044405742_c9b9fe4903_b.jpg) center / cover"
              }}
            >
              Recipes
            </CardTitle>
            <CardText>
              This app allows users to search for different types of recipes
              using an API through ReactJS.
              <br />
              <br />
              Stack: ReactJS/React-MDL
            </CardText>
            <CardActions border>
              <Button colored>GitHub Repo</Button>
              <Button colored>Live</Button>
            </CardActions>
            <CardMenu style={{ color: "#000" }}>
 
            </CardMenu>
          </Card>

          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "fff",
                height: "200px",
                background:
                  "url(https://live.staticflickr.com/65535/48044405742_c9b9fe4903_b.jpg) center / cover"
              }}
            >
              Recipes
            </CardTitle>
            <CardText>
              This app allows users to search for different types of recipes
              using an API through ReactJS.
              <br />
              <br />
              Stack: ReactJS/React-MDL
            </CardText>
            <CardActions border>
              <Button colored>GitHub Repo</Button>
              <Button colored>Live</Button>
            </CardActions>
            <CardMenu style={{ color: "#000" }}>
      
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <h1>This is my full stack work!</h1>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="projects">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>Front-End</Tab>
          <Tab>Full Stack</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Projects;
