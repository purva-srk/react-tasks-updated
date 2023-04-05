import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./Navbar";
import ToggleButton from "./pages/toggle_button/ToggleButton";
import ItemPrice from "./pages/price_calculator/ItemPrice";
import Temperature from "./pages/temperature_converter/Temperature";
import CounterApp from "./pages/counter_clone/CounterApp";
import CloneCounter from "./pages/counter_clone/CloneCounter";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/togglebutton">
            <ToggleButton />
          </Route>
          <Route path="/pricecalculator">
            <ItemPrice />
          </Route>
          <Route path="/temperetureconverter">
            <Temperature />
          </Route>
          <Route path="/counterclone">
            <CounterApp />
            <CloneCounter />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
