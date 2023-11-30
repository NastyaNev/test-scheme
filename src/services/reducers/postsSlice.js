import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    apiRequest: false,
    apiFailed: false,
    array: []
}

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        getPosts: (state) => {
            state.apiRequest = true;
        },
        getPostsSuccess: (state, action) => {
            state.array = action.payload;
            state.apiRequest = false;
        },
        getPostsFailed: (state) => {
            state.apiRequest = false;
            state.apiFailed = true
        }
    }
})

export const {getPosts, getPostsSuccess, getPostsFailed} = postsSlice.actions;
export default postsSlice.reducer;