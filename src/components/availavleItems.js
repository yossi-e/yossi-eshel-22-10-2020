import React, { useContext } from 'react';
import { Item } from './item';
import { CartContext } from '../CartContext';

export const AvailableItems = () => {

    const { availableItemsStore, cartStore } = useContext(CartContext);
    const { setCart } = cartStore;
    const { availableItems, setAvailableItems } = availableItemsStore;

    const addToCart = (item) => {

        const newItem = {
            name: item.name,
            price: item.price,
            currency: item.currency,
            store: item.store,
            est: item.est,
            id: item.id
        };

        setCart(curr => [...curr, newItem]);
        setAvailableItems(curr => curr.filter(currItem => currItem.id !== item.id));
    }

    return (
        availableItems.length > 0 &&
        <div>
            <h3>Available Items</h3>
            {availableItems.map(item => {
                return (
                    <div className="single-item" key={item.id}>
                        <Item {...item} />
                        <button type="button" onClick={() => addToCart(item)}>add to cart</button>
                    </div>
                );
            })}
        </div>
    );
}