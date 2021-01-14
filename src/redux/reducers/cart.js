import {
    CART_SUCCESS,
    SERVICES_SUCCESS,
    SUB_CATEGORIES_SUCCESS,
    LOADING_CATEGORIES_SUCCESS,
    ALL_SERVICES_SUCCESS
} from '../types';

const initialState = {
    cart: [],
    loading: false

};

const categories = (state = initialState, action) => {
    switch (action.type) {
        case CART_SUCCESS:
            return {
                ...state,
                cart: action.cart
            };
        default:
            return state;
    }
};

export default categories;
