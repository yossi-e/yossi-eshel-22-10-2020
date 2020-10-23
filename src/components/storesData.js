import React, { useContext } from 'react';
import { CartContext } from '../CartContext';

export const StoresData = (props) => {

    const { ratesStore } = useContext(CartContext);
    const { rates } = ratesStore;

    return (
        <div className="single-item">
            <b>{props.name}</b>: {props.sum} {props.currency}{rates && <span> / {(props.sum * rates.ILS).toFixed(2)} ILS</span>}
        </div>
    );
}