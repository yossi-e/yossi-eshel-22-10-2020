import React, { useContext } from 'react';
import { CartContext } from '../CartContext';
import { StoresData } from './storesData';

export const StoreListRecieved = () => {

    const { receivedStore } = useContext(CartContext);
    const { received } = receivedStore;

    const stores = [...new Set(received.map(item => item.store))];
    const storesData = stores.map(store => {
        const storeItems = received.filter(item => item.store === store);
        const sum = storeItems.reduce((acc, item) => {
            return acc + item.price
        }, 0);
        const currency = storeItems[0].currency;
        return { name: store, sum, currency };
    });

    return (
        storesData.map((store, key) =>
            <StoresData {...store} key={key} />
        )
    );
}