import React, { Component } from 'react';

import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { deepPurple800, deepPurple700, deepPurple600 } from 'material-ui/styles/colors';

import { Grid, Row, Col } from 'react-flexbox-grid';
import AppBar from 'material-ui/AppBar';

import DummyComponent from './DummyComponent';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: deepPurple800,
    primary2Color: deepPurple700,
    primary3Color: deepPurple600,
  }
});

class App extends Component {
  sayHello() {
    console.log("hello");
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={ muiTheme }>
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
            <div>
              <p>Testi Rown ulkopuolelta</p>
            </div>
          </div>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default App;
