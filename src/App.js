import { createBrowserHistory } from "history";
import { ChakraProvider } from "@chakra-ui/react";
import { Router, Route, Switch } from "react-router-dom";

// pages for this product
import HomePage from "./pages/HomePage/HomePage";
import OrdersPage from "./pages/OrdersPage/OrdersPage";
import FoodItemPage from "./pages/FoodItemPage/FoodItemPage";
import CustomersPage from "./pages/CustomersPage/CustomersPage";

// core components for this product
import NavBar from "./components/common/Navbar";
import Parallax from "./components/common/Parallax";

const hist = createBrowserHistory();

function App() {
  return (
    <ChakraProvider>
      <div>
        <NavBar />
        <Parallax />
        <Router history={hist}>
          <Switch>
            <Route path="/" component={HomePage} />
            <Route path="/orders" component={OrdersPage} />
            <Route path="/customers" component={CustomersPage} />
            <Route path="/food-items" component={FoodItemPage} />
          </Switch>
        </Router>
      </div>
    </ChakraProvider>
  );
}

export default App;
