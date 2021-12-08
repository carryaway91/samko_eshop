import { ActionType } from "../action-types"

export const addToCart = () => {
    return (dispatch) => {
        dispatch({
            type: ActionType.ADD_TO_CART
        })
    }
}