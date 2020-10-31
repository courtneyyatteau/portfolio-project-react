import React, { Component } from 'react';
import { render } from 'react-dom';
import { UncontrolledCollapse } from 'reactstrap';
import Footer from './Footer';


class Tickets extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <button id="test">Test</button>
          <UncontrolledCollapse toggler={"#test"}>
            Code here
          </UncontrolledCollapse>
          <br />
          <button id="test2">Test</button>
          <UncontrolledCollapse toggler={"#test2"}>
            Code here
          </UncontrolledCollapse>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Tickets;