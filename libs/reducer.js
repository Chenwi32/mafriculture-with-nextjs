export const initialstate = {
  basket: [],
};

export const getBasketTotal = (basket) => {
  return basket?.reduce((amount, item) => item.price + amount, 0);
};


// Reducer to handle user actions on products

const reducer = (state = initialstate, action) => {
    // switch statement to handle different actions

    switch (action.type) {
        // If the action is ADD_TO_CART
        case 'ADD_TO_CART':
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        
        // If the action is REMOVE_FROM_CART

        case 'REMOVE_FROM_CART':

            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            )

            let newBasket = [...state.basket]

            if (index >= 0) {
                newBasket.splice(index, 1)
            }
            
            return {
                ...state,
                basket: newBasket
            }
        
        default:
            return state
    }
}

export default reducer