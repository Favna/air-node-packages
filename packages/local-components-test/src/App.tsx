import { createMuiTheme, MuiThemeProvider, Theme } from '@material-ui/core/styles';
import { StylesProvider } from '@material-ui/styles';
import React from 'react';
import Home from './Home';
import { ThemeColours } from './utils/constants';

const createTheme: Theme = createMuiTheme({
  ...ThemeColours,
  typography: {
    fontFamily: ['rijksoverheidsanstext', 'verdana', 'arial', 'sans-serif'].join(','),
    fontSize: 16
  },
  shape: {
    borderRadius: 0
  }
});

const App: React.FC = () => (
  <StylesProvider injectFirst>
    <MuiThemeProvider theme={createTheme}>
      <Home />
    </MuiThemeProvider>
  </StylesProvider>
);

export default App;
