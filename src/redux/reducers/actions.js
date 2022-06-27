export const SET_USER = 'SET_USER';
export const SET_SOCKET_STATE = 'SET_SOCKET_STATE';
export const UPDATE_USERS = 'UPDATE_USERS';
export const ADD_USERS = 'ADD_USERS';
export const SET_USERS_NUM = 'SET_USERS_NUM';

export const setUserData = (payload) => ({
    type: SET_USER,
    payload,
});

export const setSocketState = (payload) => ({
    type: SET_SOCKET_STATE,
    payload,
});

export const updateUsers = (payload) => ({
    type: UPDATE_USERS,
    payload,
});

export const addUsers = (payload) => ({
    type: ADD_USERS,
    payload,
});

export const setUsersNum = (payload) => ({
    type: SET_USERS_NUM,
    payload,
});
