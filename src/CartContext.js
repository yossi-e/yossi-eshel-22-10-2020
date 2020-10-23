import React, { useState, useEffect } from 'react';
import items from './items.json';
import { RATES_FETCH_TIMEOUT } from './config.json';

export const CartContext = React.createContext(null);

export const CartProvider = (props) => {

    useEffect(() => {
        async function fetchData() {
            await fetch('https://api.exchangeratesapi.io/latest?base=USD&symbols=ILS')
                .then(response => response.json())
                .then(data => {
                    setRates(data.rates);
                })
                .catch(error => {
                    alert('rates are not availabe')
                    console.log(error);
                })

            setTimeout(() => {
                fetchData();
            }, RATES_FETCH_TIMEOUT);
        }
        fetchData();
    }, []);

    const [availableItems, setAvailableItems] = useState(items);
    const [cart, setCart] = useState([]);
    const [received, setReceived] = useState([]);
    const [rates, setRates] = useState(null);

    const store = {
        availableItemsStore: { availableItems, setAvailableItems },
        cartStore: { cart, setCart },
        receivedStore: { received, setReceived },
        ratesStore: { rates, setRates }
    };

    return <CartContext.Provider value={store}>
        {props.children}
    </CartContext.Provider>
}