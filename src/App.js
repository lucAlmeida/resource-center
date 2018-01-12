import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MUIDefaultTheme from './hoc/MUIDefaultTheme/MUIDefaultTheme';
import AppBar from 'material-ui/AppBar';

class App extends Component {
  render() {
    return (
        <div className="App">
          <AppBar
            title="Title"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
        </div>
    );
  }
}

export default MUIDefaultTheme(App);
