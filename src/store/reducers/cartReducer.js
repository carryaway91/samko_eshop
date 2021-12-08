import { ActionType } from "../action-types"

const initialState = 0

const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case ActionType.ADD_TO_CART:
            return state + 1
        default: return state
    }
}

export default cartReducer