import cartActionsTypes from './cartActionsTypes'
import { addItemToCart } from './cartUtils'

const INITIAL_STATE = {
    hidden: false,
    cartItems: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartActionsTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case cartActionsTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        default:
            return state
    }
}