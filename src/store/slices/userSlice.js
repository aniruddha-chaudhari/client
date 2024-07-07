// userSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
  email: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      const { username, email } = action.payload;
      state.username = username;
      state.email = email;
    },
    clearUser(state) {
      state.username = '';
      state.email = '';
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
