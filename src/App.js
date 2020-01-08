import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Navbar from "react-bootstrap/Navbar";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Media from "react-media";
import Button from "react-bootstrap/Button";
import Routes from "./Routes";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const childProps = {};

    return (
      !this.state.isAuthenticating && (
        <Container>
          <Media
            query="(max-width: 900px)"
            render={() => (
              <div className="App container">
                <Navbar
                  className="app-navi-bar"
                  bg="light"
                  variant="light"
                  expand="lg"
                ></Navbar>

                <Routes childProps={childProps} />
              </div>
            )}
          />

          <Media
            query="(min-width: 900px)"
            render={() => (
              <div className="App container">
                <Navbar
                  className="app-navi-bar"
                  bg="light"
                  variant="light"
                  expand="lg"
                ></Navbar>

                <Routes childProps={childProps} />
              </div>
            )}
          />
        </Container>
      )
    );
  }
}

// export with a HOC to give app access to router props
// access the history object's props and the closest
// <Routes>'s match withRouter().
export default withRouter(App);
//export default App;
