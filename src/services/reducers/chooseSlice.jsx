import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  allChecked: false,
  hiddenMenu: true,
  postsChecked: [],
};

export const chooseSlice = createSlice({
  name: "choose",
  initialState,
  reducers: {
    setAllChecked: (state, action) => {
      state.allChecked = true;
      state.postsChecked = action.payload.map((i) => i.id);
      state.hiddenMenu = false;
    },
    setPostChecked: (state, action) => {
      if (state.postsChecked.includes(action.payload)) {
        state.postsChecked = state.postsChecked.filter(
          (id) => id !== action.payload
        );
      } else {
        state.postsChecked = [...state.postsChecked, action.payload];
      }

      state.postsChecked.length > 0
        ? (state.hiddenMenu = false)
        : (state.hiddenMenu = true);
    },
    setNotChecked: (state) => {
      state.allChecked = false;
      state.hiddenMenu = true;
      state.postsChecked = [];
    },
  },
});

export const {
  setAllChecked,
  setPostChecked,
  setNotChecked,
  setPostNotChecked,
} = chooseSlice.actions;
export default chooseSlice.reducer;
