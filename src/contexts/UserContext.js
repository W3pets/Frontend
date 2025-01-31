import { createContext, useReducer, useEffect } from "react";

export const UserContext = createContext()

export const userReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { user: action.payload }
        case 'LOGOUT':
            return { user: null }
        case 'ADD_TO_CART':
            const existingProductIndex = state.user.cart.findIndex(item => item.id === action.payload.id);
            if (existingProductIndex !== -1) {
                const updatedCart = state.user.cart.map((item, index) =>
                    index === existingProductIndex ? { ...item, count: item.count + 1 } : item
                );
                return { user: { ...state.user, cart: updatedCart } };
            } else {
                return { user: { ...state.user, cart: [...state.user.cart, { ...action.payload, count: 1 }] } };
            }
        case 'REMOVE_FROM_CART':
            const productIndex = state.user.cart.findIndex(item => item.id === action.payload.id);
            if (productIndex !== -1) {
                const product = state.user.cart[productIndex];
                if (product.count > 1) {
                    const updatedCart = state.user.cart.map((item, index) =>
                        index === productIndex ? { ...item, count: item.count - 1 } : item
                    );
                    return { user: { ...state.user, cart: updatedCart } };
                } else {
                    const updatedCart = state.user.cart.filter((item, index) => index !== productIndex);
                    return { user: { ...state.user, cart: updatedCart } };
                }
            }
            return state;
        case 'CLEAR_CART':
            state.user.cart = []
            return state
        default:
            return false
    }
}

export const UserContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, { user: null })

    // console.log(state);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))

        if (user) {
            dispatch({ type: 'LOGIN', payload: user })
        }
    }, [])

    // console.log('UserContext State: ', state)

    return (
        <UserContext.Provider value={{ ...state, dispatch }}>
            {children}
        </UserContext.Provider>
    )
}