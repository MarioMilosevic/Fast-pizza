import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export type LoadingState = {
  loading: boolean;
  error:boolean
};

const initialState: LoadingState = {
  loading: false,
  error:false
};

export const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<boolean>) => {
      state.error = action.payload
    }
  },
});

export const { setLoading, setError } = loadingSlice.actions;
export default loadingSlice.reducer;
