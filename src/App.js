import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DummyComponent from './DummyComponent';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <DummyComponent />
      </MuiThemeProvider>
    );
  }
}

export default App;
