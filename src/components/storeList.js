import React, { useContext } from 'react';
import { CartContext } from '../CartContext';
import { StoresData } from './storesData';

export const StoreList = () => {

    const { cartStore } = useContext(CartContext);
    const { cart } = cartStore;

    const stores = [...new Set(cart.map(item => item.store))];
    const storesData = stores.map(store => {
        const storeItems = cart.filter(item => item.store === store);
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