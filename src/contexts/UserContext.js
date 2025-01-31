import { createContext, useReducer, useEffect } from "react";

export const UserContext = createContext()

// user = {
//     token: "dshvjerjkbfsdfdsfsdf.dsfsvdghdshd",
//     user: {
//         username: "customer",
//         email: "customer.customer@w3pets.com",
//         cart: [
//             {
//                 images: [
//                     '/parrot-pic.png',
//                     '/parrot2-pic2.png',
//                     '/parrot2-pic3.png',
//                     '/parrot2-pic4.png',
//                     '/parrot2-pic5.png',
//                     '/parrot2-pic6.png',
//                 ],
//                 title: 'Cockatiel',
//                 category: 'Parrots',
//                 breed: 'Cockatiel',
//                 age: '6 months',
//                 price: '55,000',
//                 location: 'Mokola, Ibadan',
//                 productId: '12357',
//                 weight: '0.9 kg',
//                 gender: 'Male',
//                 description: 'A friendly Cockatiel that loves to whistle and sing.',
//                 reviews: [
//                     { user: 'Diana Prince', rating: 5, comment: 'Beautiful bird, very vocal.' },
//                 ],
//                 sellerName: 'Feathered Friends',
//             },
//         ]
//     }
// }

const initialState = { user: null };

export const userReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { user: action.payload };
        case 'LOGOUT':
            return { user: null };
        default:
            return state;
    }
};

export const UserContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, initialState);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            dispatch({ type: 'LOGIN', payload: user });
        }
    }, []);

    useEffect(() => {
        if (state.user) {
            localStorage.setItem('user', JSON.stringify(state.user));
        } else {
            localStorage.removeItem('user');
        }
    }, [state.user]);

    return (
        <UserContext.Provider value={{ ...state, dispatch }}>
            {children}
        </UserContext.Provider>
    );
};