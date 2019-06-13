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
          <Card
            shadow={2}
            style={{
              minWidth: "450",
              maxWidth: "450",
              maxHeight: "350",
              margin: "auto",
              backgroundColor: "#E4DCDD"
            }}
          >
            <CardTitle
              className="card-title"
              style={{
                color: "#000",
                height: "200px",

                background:
                  "url(https://live.staticflickr.com/65535/48045241043_cf4695956d_b.jpg) center / cover"
              }}
            >
              Hangman
            </CardTitle>
            <CardText style={{ color: "#000" }}>
              I built this app based on the Hangman game. The tech stack includes HTML, CSS, and Vanilla Javascript.
            </CardText>
            <CardActions border className="card">
             <a href="https://vtjongar.github.io/hangman2/"> <Button colored>Live Site</Button></a>
              <a href="https://github.com/vtjongar/hangman2"><Button colored>Code</Button></a>
            </CardActions>
            <CardMenu style={{ color: "#A5A5A5" }} />
          </Card>

          <Card 
            shadow={2}
            style={{
              minWidth: "450",
              maxWidth: "450",
              maxHeight: "322",
              margin: "auto",
              backgroundColor: "#E4DCDD"
            }}
          >
            <CardTitle 
              style={{
                color: "000",
                height: "200px",
                background:
                  "url(https://live.staticflickr.com/65535/48045150463_07cfe86268_b.jpg) center / cover"
              }}
            >
              Recipes
            </CardTitle>
            <CardText style={{ color: "#000" }}>
              I built this app using an API through ReactJS. Users can search for various kinds of recipes. The tech stack includes ReactJS and React-MDL.
            </CardText>
            <CardActions border className="card">
            <a href="https://tuffrecipes.netlify.com/"><Button colored>
                Live Site
              </Button></a>
             <a href="https://github.com/vtjongar/tuff-recipes"> <Button colored>Code</Button></a>
            </CardActions>
            <CardMenu style={{ color: "#A5A5A5" }} />
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          <Card className="hangman"
            shadow={2}
            style={{
              minWidth: "450",
              maxWidth: "450",
              maxHeight: "350",
              margin: "auto",
              backgroundColor: "#E4DCDD"
            }}
          >
            <CardTitle
              className="card-title"
              style={{
                color: "#000",
                height: "200px",

                background:
                  "url(https://live.staticflickr.com/65535/48046186866_1267066faf_b.jpg) center / cover"
              }}
            >
              Opinions
            </CardTitle>
            <CardText style={{ color: "#000" }}>
              I built this app for people around the world to be able to share their opinions on different topics.
            </CardText>
            <CardActions border className="card">
             <a href="https://google.com"> <Button colored>Live Site</Button></a>
              <a href="https://github.com/vtjongar/opinions"><Button colored>Code</Button></a>
            </CardActions>
            <CardMenu style={{ color: "#A5A5A5" }} />
          </Card>
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
     
        >
          <Tab> <div style={{ color: "#fff" }}>Front-End</div></Tab>
          <Tab><div style={{ color: "#fff" }}>Full-Stack</div></Tab>
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
