import {
    CART_SUCCESS, REGION_SUCCESS,
} from '../types';

const setCart = (cartArray) => {
    return (dispatch) => {
        dispatch({ type: CART_SUCCESS, cart: cartArray })
    };
}
const setRegion = (userData) => {
    console.log("userData:", userData)
    return (dispatch) => {
        dispatch({ type: REGION_SUCCESS, region: userData.region, address: userData.address })
    };
}


const clear = () => {
    return (dispatch) => {
        dispatch({ type: CART_SUCCESS, cart: [] })
    };
}



export const cartActions = {
    setCart,
    clear,
    setRegion
};