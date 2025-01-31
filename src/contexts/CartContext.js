import React, { createContext, useReducer, useEffect } from 'react';

export const CartContext = createContext();

const initialState = { cart: [] };

export const cartReducer = (state, action) => {
    switch (action.type) {
        case 'INITIALIZE_CART':
            return { cart: action.payload };
        case 'ADD_TO_CART':
            const existingProductIndex = state.cart.findIndex(item => item.id === action.payload.id);
            if (existingProductIndex !== -1) {
                const updatedCart = state.cart.map((item, index) =>
                    index === existingProductIndex ? { ...item, count: item.count + 1 } : item
                );
                return { cart: updatedCart };
            } else {
                return { cart: [...state.cart, { ...action.payload, count: 1 }] };
            }
        case 'REMOVE_FROM_CART':
            const productIndex = state.cart.findIndex(item => item.id === action.payload.id);
            if (productIndex !== -1) {
                const product = state.cart[productIndex];
                if (product.count > 1) {
                    const updatedCart = state.cart.map((item, index) =>
                        index === productIndex ? { ...item, count: item.count - 1 } : item
                    );
                    return { cart: updatedCart };
                } else {
                    const updatedCart = state.cart.filter((item, index) => index !== productIndex);
                    return { cart: updatedCart };
                }
            }
            return state;
        case 'CLEAR_CART':
            return { cart: [] };
        default:
            return state;
    }
};

export const CartContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem('cart'));
        if (cart) {
            dispatch({ type: 'INITIALIZE_CART', payload: cart });
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(state.cart));
    }, [state.cart]);

    return (
        <CartContext.Provider value={{ ...state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};