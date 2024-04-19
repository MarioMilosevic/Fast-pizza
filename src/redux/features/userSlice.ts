import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export type UserState = {
  name: string;
};

const initialState: UserState = {
  name: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createUser: (state, action: PayloadAction<string>) => {
      state.name += action.payload;
    },
    resetUser: (state) => {
      state.name = "";
    },
  },
});
export const { createUser, resetUser } = userSlice.actions;
export default userSlice.reducer;
