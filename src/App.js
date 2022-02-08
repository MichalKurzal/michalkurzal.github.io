import StartPage from "./components/startPage";
import MobileApps from "./components/mobileApps";
import WebApps from "./components/webApps";
import About from "./components/about";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./App.css";

function App() {
  const theme = createTheme();

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
