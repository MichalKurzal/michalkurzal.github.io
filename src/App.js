import StartPage from "./components/startPage";
import MobileApps from "./components/mobileApps";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={StartPage} />
        <Route path="/mobileApps" component={MobileApps} />
      </Switch>
    </Router>
  );
}

export default App;
