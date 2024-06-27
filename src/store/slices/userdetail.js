import { createSlice } from "@reduxjs/toolkit";

export const userdetail = createSlice({
    name: "userdetail",
    initialState: {
        username: [],
        loading : false,
        error : null
    },
   
});

export default userdetail.reducer;