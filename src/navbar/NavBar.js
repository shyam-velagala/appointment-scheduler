import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { MuiThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#0097a7',
        main: '#00838f',
        dark: '#006064',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });

const NavBar = () => {
    return (
        <div>
            <MuiThemeProvider theme={theme}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="title" color="inherit">
                            <h3 className={"app-name"}>Appointment Scheduler</h3>
                </Typography>
                    </Toolbar>
                </AppBar>
            </MuiThemeProvider>
        </div>
    )
}
export default NavBar;