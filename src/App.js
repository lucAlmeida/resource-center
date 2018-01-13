import React, { Component } from 'react';
import './App.css';
import MUIDefaultTheme from './hoc/MUIDefaultTheme/MUIDefaultTheme';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class App extends Component {
  state = {
    open: false
  }
  
  handleToggle = () => {
    this.setState({open: !this.state.open});
  }

  render() {
    return (
        <div className="App">
          <AppBar
            title="Title"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            onLeftIconButtonClick={this.handleToggle}
          />
          <Drawer 
            open={this.state.open}
            docked={false}
            onRequestChange={(open) => {this.setState({open: open})}}>
            <MenuItem>Menu Item</MenuItem>
            <MenuItem>Menu Item 2</MenuItem>
          </Drawer>
        </div>
    );
  }
}

export default MUIDefaultTheme(App);
