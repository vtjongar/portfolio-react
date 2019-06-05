import React, { Component } from 'react';
import { Tabs, Tab } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <Tabs>
          <Tab>Front End</Tab>
          <Tab>Full Stack</Tab>
        </Tabs>
      </div>
    )
  }
}
export default Projects;