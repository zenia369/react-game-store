import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const searchFetch = createAsyncThunk("search/fetchItmes", async (gameName) => {
  const response = await axios.get(
    `${process.env.REACT_APP_BASE_URL}games?key=${process.env.REACT_APP_API_KEY}&search=${gameName}&page_size=10`
  );

  return response.data.results;
});

const initialState = {
  items: [],
  isLoaded: false,
  isLoading: false,
  error: null,
  value: undefined,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    deleteSearched(state, actions) {
      state.items = [];
      state.value = undefined;
      state.isLoaded = false;
    },
    setValue(state, actions) {
      state.value = actions.payload;
    },
  },
  extraReducers: {
    [searchFetch.pending]: (state, actions) => {
      state.isLoading = true;
    },
    [searchFetch.fulfilled]: (state, actions) => {
      state.items = actions.payload;
      state.isLoaded = true;
      state.isLoading = false;
    },
    [searchFetch.rejected]: (state, actions) => {
      state.error = actions.payload.message;
    },
  },
});

export const { deleteSearched, setValue } = searchSlice.actions;
export default searchSlice.reducer;
