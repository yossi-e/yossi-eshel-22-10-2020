import React, { useContext } from 'react';
import { CartContext } from '../CartContext';

export const Item = (props) => {

    const { ratesStore } = useContext(CartContext);
    const { rates } = ratesStore;

    let conversion = "";

    if (rates) {
        conversion = (props.price * rates.ILS).toFixed(2) + " ILS";
    }

    return (
        <div className="item">
            <div><b>Item Name:</b> {props.name}</div>
            <div><b>Store Name:</b> {props.store}</div>
            <div><b>Price:</b> {props.price} ({props.currency} Only) {conversion && <span>/ {conversion}</span>}</div>
            <div><b>Delivery EST Date:</b> {props.est}</div>
        </div>
    );
}