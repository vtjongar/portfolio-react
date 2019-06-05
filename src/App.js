import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

function App() {
  return (
    <div style={{ height: "300px", position: "relative" }}>
      <Layout fixedHeader>
        <Header
          title={
            <span>
              <span style={{ color: "#ddd" }}>Area / </span>
              <strong>The Title</strong>
            </span>
          }
        >
          <Navigation>
            <Link to="/resume">resume</Link>
            <Link to="/aboutme">aboutme</Link>
            <Link to="/projects">projects</Link>
            <Link to="/contact">contact</Link>
          </Navigation>
        </Header>
        <Drawer title="Title">
          <Navigation>
            <Link to="/resume">resume</Link>
            <Link to="/aboutme">aboutme</Link>
            <Link to="/projects">projects</Link>
            <Link to="/contact">contact</Link>
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

export default App;
