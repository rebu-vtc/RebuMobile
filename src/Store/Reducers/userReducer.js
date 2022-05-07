
import { USER_LOGIN, USER_LOGOUT } from '../actions/user.actions';


const initialState ={
    isLogged: false,
}

const userReducer = (state = initialState, action) {
    switch(action.type) {
        case USER_LOGIN: {
            const { email = "adja@gmail.com" } = action.payload
            return {
                isLoggedIn: true,
            }
        }

        case USER_LOGOUT: {
            return {
                isLoggedIn: false,
            }
        }
        default: {
            return state
        }
    }
}

export default userReducer 