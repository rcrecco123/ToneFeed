import * as UserUtil from '../utils/user_api_util';

export const RECEIVE_USER_SHOW = "RECEIVE_USER_SHOW";
export const RECEIVE_USERS = "RECEIVE_USERS"

export const receiveUserShow = (user) => {
    return {
        type: RECEIVE_USER_SHOW,
        user,
    }
}

export const receiveUsers = (users) => {
    return {
        type: RECEIVE_USERS,
        users
    }
}

export const fetchUserShow = (id) => dispatch => {
    return (
        UserUtil.fetchUserShow(id)
            .then(user => dispatch(receiveUserShow(user)))
    )
};

export const fetchUsers = () => dispatch => {
    return (
        UserUtil.fetchUsers()
            .then(users => dispatch(receiveUsers(users)))
    )
}

