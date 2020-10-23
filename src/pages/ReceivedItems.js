import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import { CartContext } from '../CartContext';
import { Item } from '../components/item'
import { StoreListRecieved } from '../components/storeListRecieved';

export const ReceivedItems = () => {

    const { receivedStore } = useContext(CartContext);
    const { received } = receivedStore;

    return (
        <div>
            <h3>Received Items</h3>
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <NavLink activeClassName="active" to="/received/items">Items</NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="active" to="/received/stores">Stores</NavLink>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route path="/received/items">
                            {received.length > 0 &&
                                <ul>
                                    {received.map(item =>
                                        <div className="single-item" key={item.id}>
                                            <Item {...item} />
                                        </div>
                                    )}
                                </ul>
                            }
                        </Route>
                        <Route path="/received/stores">
                            <StoreListRecieved />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}