import cartActionsTypes from './cartActionsTypes'

export const toggleCartHidden = _ => ({
    type: cartActionsTypes.TOGGLE_CART_HIDDEN
})

export const addItemToCart = item => ({
    type: cartActionsTypes.ADD_ITEM,
    payload: item
})

export const removeItemFromCart = item => ({
    type: cartActionsTypes.REMOVE_ITEM,
    payload: item
})

export const clearItemFromCart = item => ({
    type: cartActionsTypes.CLEAR_ITEM_FROM_CART,
    payload: item
})

