import StartPage from './components/startPage';
import MobileApps from './components/mobileApps';
import WebApps from './components/webApps';
import About from './components/about';
import { green, orange, red } from '@mui/material/colors';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppContext from './api/context';

import './App.css';
import { useState } from 'react';

const primaryColor = green[600];
const secondaryColor = orange[500];
const dangerColor = red[900];

function App() {
  
  const theme = createTheme({
    palette: {
        primary: {
            main: primaryColor,
        },
        secondary: {
            main: secondaryColor,
        },
        error: {
            main: dangerColor,
        },
    },
});

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    });
    const [_theme, setTheme] = useState(darkTheme);

    return (
        <AppContext.Provider value={{ _theme,theme, darkTheme, setTheme }}>
            <ThemeProvider theme={_theme}>
                <Router>
                    <Switch>
                        <Route exact path="/" component={StartPage} />
                        <Route path="/mobileApps" component={MobileApps} />
                        <Route path="/webApps" component={WebApps} />
                        <Route path="/about" component={About} />
                    </Switch>
                </Router>
            </ThemeProvider>
        </AppContext.Provider>
    );
}

export default App;
