import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    ids: localStorage.getItem("favorites") ? JSON.parse(localStorage.getItem("favorites")) : []
}

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        setToFavorites: (state, action) => {
            if (state.ids.includes(action.payload)) {
                state.ids = state.ids.filter(id => id !== action.payload);
                localStorage.setItem("favorites", JSON.stringify(state.ids));
            } else {
                state.ids = [...state.ids, action.payload];
                localStorage.setItem("favorites", JSON.stringify(state.ids));
            }
        }
    }
})

export const {setToFavorites} = favoritesSlice.actions;
export default favoritesSlice.reducer;