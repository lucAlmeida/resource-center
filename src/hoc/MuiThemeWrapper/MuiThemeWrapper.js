import React from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiThemeWrapper = (WrappedComponent, Theme) => {
    return (props) => (
        <MuiThemeProvider muiTheme={getMuiTheme(Theme)}>
            <WrappedComponent {...props} />
        </MuiThemeProvider>
    )
}

export default muiThemeWrapper;
