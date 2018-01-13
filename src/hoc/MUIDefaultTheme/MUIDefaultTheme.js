import React from 'react';
import { MuiThemeProvider } from 'material-ui/styles';

const muiDefaultTheme = (WrappedComponent) => {
    return (props) => (
        <MuiThemeProvider>
            <WrappedComponent {...props} />
        </MuiThemeProvider>
    )
}

export default muiDefaultTheme;
