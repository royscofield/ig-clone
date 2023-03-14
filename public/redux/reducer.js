import { USER_PACKAGE } from "./constants"

const userState = {
    user: {},
}

export const userReducer = (state = userState, action) =>
{
    switch (action.type)
    {
        case USER_PACKAGE:{
            return {...state, user: action.payload}
        }
        default:
            return state
    }
}