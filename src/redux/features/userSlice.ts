import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export type UserState = {
  name: string;
  phoneNumber: string;
  address: string;
  priority:boolean
};

const initialState: UserState = {
  name: "",
  phoneNumber: "",
  address: "",
  priority:false
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // changeUserProperty: (
    //   state,
    //   action: PayloadAction<{ key: keyof UserState; value: string }>
    // ) => {
    //   const { key, value } = action.payload;
    //   state[key] = value;
    // },
    changeUserName: (state, action: PayloadAction<string>) => {
      state.name += action.payload
    },
    togglePriority: (state) => {
      state.priority = !state.priority
    },
    resetUser: (state) => {
      state.name = "";
      state.phoneNumber = "";
      state.address = "";
      state.priority = false
    },
  },
});
export const {
  resetUser,
  changeUserName,
  togglePriority
} = userSlice.actions;
export default userSlice.reducer;
