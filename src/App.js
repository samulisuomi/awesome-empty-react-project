import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid, Row, Col } from 'react-flexbox-grid';
import AppBar from 'material-ui/AppBar';
import DummyComponent from './DummyComponent';
import './App.css';

class App extends Component {
  sayHello() {
    console.log("hello");
  }

  render() {
    return (
      <MuiThemeProvider>
        <Grid fluid className="App-Grid">
          <Row className="App-Bar-Row">
            <AppBar className="App-Bar"
              title="Awesome Empty React Project"
            />
          </Row>
          <div className="App-Container">
            <Row className="Row middle-xs">
              <Col className="end-md" xs={12} sm={12} md={6} lg={6}>
                <p>This is some text.</p>
              </Col>
              <Col className="start-md" xs={12} sm={12} md={6} lg={6}>
                <DummyComponent sayHello={ this.sayHello } />
              </Col>
            </Row>
          </div>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default App;
