import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import { BoughtItems } from './pages/BoughtItems';
import { ReceivedItems } from './pages/ReceivedItems';
import { CartProvider } from './CartContext';
import { AvailableItems } from './components/availavleItems';
import './App.css';

function App() {

  return (
    <CartProvider>
      <div className="container">
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <NavLink to="/availableItems">Available Items</NavLink>
                </li>
                <li>
                  <NavLink to="/list/items">List</NavLink>
                </li>
                <li>
                  <NavLink to="/received/items">Received</NavLink>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path="/list">
                <BoughtItems />
              </Route>
              <Route path="/received">
                <ReceivedItems />
              </Route>
              <Route path="/availableItems">
                <AvailableItems />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </CartProvider>
  );
}

export default App;