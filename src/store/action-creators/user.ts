import { Dispatch } from "redux";
import { UserAction, UsersActionTypes } from "../../types/user";
import axios from 'axios';


export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UsersActionTypes.FETCH_USERS})
            const responce = await axios.get('https://jsonplaceholder.typicode.com/users')
            setTimeout(() => {
                dispatch({type: UsersActionTypes.FETCH_USERS_SUCCESS, payload: responce.data})
            }, 500)
        } catch(e) {
            dispatch({
                type: UsersActionTypes.FETCH_USERS_ERROR,
                payload: 'An error occurred while uploading users'
            })
        }
    }
}