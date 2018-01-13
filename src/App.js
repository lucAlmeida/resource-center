import React, { Component } from 'react';
import './App.css';
import Aux from './hoc/Aux/Aux';
import withClass from './hoc/withClass/withClass';
import MuiThemeWrapper from './hoc/MuiThemeWrapper/MuiThemeWrapper';
import customThemeOne from './themes/customThemeOne'
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
      <Aux>
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
      </Aux>
    );
  }
}

export default MuiThemeWrapper(withClass(App, "App"), customThemeOne);
