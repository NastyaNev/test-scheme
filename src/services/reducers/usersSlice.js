import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    apiRequest: false,
    apiFailed: false,
    array: []
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        getUsers: (state) => {
            state.apiRequest = true;
        },
        getUsersSuccess: (state, action) => {
            state.array = action.payload;
            state.apiRequest = false;
        },
        getUsersFailed: (state) => {
            state.apiRequest = false;
            state.apiFailed = true
        }
    }
})

export const {getUsers, getUsersSuccess, getUsersFailed} = usersSlice.actions;
export default usersSlice.reducer;