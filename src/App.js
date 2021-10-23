import StartPage from "./components/startPage";
import MobileApps from "./components/mobileApps";
import WebApps from "./components/webApps";
import About from "./components/about";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={StartPage} />
        <Route path="/mobileApps" component={MobileApps} />
        <Route path="/webApps" component={WebApps} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
}

export default App;
