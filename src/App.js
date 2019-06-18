import React, { Component } from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header
            className="header-color"
            title={
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontFamily: " Poiret One"
                }}
                to="/"
              >
                Vanessa Henderson
              </Link>
            }
            scroll
          >
            <Navigation>
              <Link to="/" style={{ color: "white" }}>
                home
              </Link>
              <Link to="/about" style={{ color: "white" }}>
                about
              </Link>
              <Link to="/work" style={{ color: "white" }}>
                side projects
              </Link>
              <div style={{ color: "white" }}>
                <a
                  style={{ color: "white", textDecoration: "none" }}
                  href="https://drive.google.com/file/d/1lHUja2ME9WICvATki28HBez55AFXi5u2/view"
                >
                  resume{" "}
                </a>
              </div>
              <Link to="/contact" style={{ color: "white" }}>
                contact
              </Link>
            </Navigation>
          </Header>
          <Drawer
            title={
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontFamily: "Poiret One"
                }}
                to="/"
              >
                Home
              </Link>
            }
            style={{ backgroundColor: "#766780", color: "#000" }}
          >
            <Navigation>
              <Link to="/about" style={{ color: "white" }}>
                about
              </Link>
              <Link to="/work" style={{ color: "white" }}>
                side projects
              </Link>
              <div style={{ color: "white" }}>
                <a
                  style={{ color: "white", textDecoration: "none" }}
                  href="https://drive.google.com/file/d/1lHUja2ME9WICvATki28HBez55AFXi5u2/view"
                >
                  resume{" "}
                </a>
              </div>
              <Link to="/contact" style={{ color: "white" }}>
                contact
              </Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
