import React, { Component } from "react";
import { withRouter } from "react-router";
import Container from "react-bootstrap/Container";

import Media from "react-media";
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
                <Routes childProps={childProps} />
              </div>
            )}
          />

          <Media
            query="(min-width: 900px)"
            render={() => (
              <div className="App container">
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
