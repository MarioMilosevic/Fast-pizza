import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export type UserState = {
  name: string;
  phoneNumber: string;
  address: string;
};

const initialState: UserState = {
  name: "",
  phoneNumber: "",
  address: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeUserProperty: (
      state,
      action: PayloadAction<{ key: keyof UserState; value: string }>
    ) => {
      const { key, value } = action.payload;
      state[key] = value;
    },
    resetUser: (state) => {
      state.name = "";
    },
  },
});
export const {
  resetUser,
  changeUserProperty
} = userSlice.actions;
export default userSlice.reducer;
