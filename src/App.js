import StartPage from "./components/startPage";
import MobileApps from "./components/mobileApps";
import WebApps from "./components/webApps";
import About from "./components/about";
import { green, orange, red } from '@mui/material/colors';  
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./App.css";

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

  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Switch>
        <Route exact path="/" component={StartPage} />
        <Route path="/mobileApps" component={MobileApps} />
        <Route path="/webApps" component={WebApps} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
    </ThemeProvider>
  );
}

export default App;
