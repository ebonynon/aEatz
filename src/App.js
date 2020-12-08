import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
// pages for this product
import HomePage from "./pages/HomePage/HomePage";

// core components for this product
import NavBar from "./components/common/Navbar";

const hist = createBrowserHistory();

function App() {
  return (
    <div>
      <NavBar />
      <Router history={hist}>
        <Switch>
          <Route path="/" component={HomePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
