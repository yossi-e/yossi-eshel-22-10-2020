import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import { CartContext } from '../CartContext';
import { Item } from '../components/item';
import { StoreList } from '../components/storeList';

export const BoughtItems = () => {

    const { receivedStore, cartStore } = useContext(CartContext);
    const { cart, setCart } = cartStore;
    const { setReceived } = receivedStore;

    const addToReceived = (item) => {

        const newItem = {
            name: item.name,
            price: item.price,
            currency: item.currency,
            store: item.store,
            est: item.est,
            id: item.id
        };

        setCart(curr => curr.filter(itemToREmove => itemToREmove.id !== item.id));
        setReceived(curr => [...curr, newItem]);
    }

    return (
        <div>
            <h3>Bought Items</h3>
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <NavLink activeClassName="active" to="/list/items">Items</NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="active" to="/list/stores">Stores</NavLink>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route path="/list/items">
                            {cart.length > 0 &&
                                <ul>
                                    {cart.sort((a, b) => {
                                        return new Date(a.est) - new Date(b.est);
                                    })
                                        .map(item =>
                                            <div className="single-item" key={item.id}>
                                                <Item {...item} />
                                                <button type="button" onClick={() => addToReceived(item)}>Received</button>
                                            </div>
                                        )}
                                </ul>
                            }
                        </Route>
                        <Route path="/list/stores">
                            <StoreList />
                        </Route>
                    </Switch>
                </div>
            </Router>

        </div>
    );
}