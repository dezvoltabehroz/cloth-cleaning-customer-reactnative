import {
    CART_SUCCESS,
} from '../types';

const setCart = (cartArray) => {
    return (dispatch) => {
        dispatch({ type: CART_SUCCESS, cart: cartArray })
    };
}


const clear = () => {
    return (dispatch) => {
        dispatch({ type: CART_SUCCESS, cart: [] })
    };
}



export const cartActions = {
    setCart,
    clear
};