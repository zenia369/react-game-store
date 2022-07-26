import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import getDate from '../../helpers/getDate';

export const popularFetch = createAsyncThunk(
    'popular/fetchItmes',
    async () => {
        const infoYear = getDate();

        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}games?key=${process.env.REACT_APP_API_KEY}&dates=${infoYear.last},${infoYear.current}&ordering=-rating&page_size=20`);

        return response.data.results
    }
)


const initialState = {
    items: [],
    isLoaded: false,
    error: null
}

const popularSlice = createSlice({
    name: 'popular',
    initialState,
    reducers: {},
    extraReducers: {
        [popularFetch.fulfilled]: (state, actions) => {
            state.items = actions.payload;
            state.isLoaded = true;
        },
        [popularFetch.rejected]: (state, actions) => {
            state.error = actions.payload.message
        }
    },
});

export const {} = popularSlice.actions
export default popularSlice.reducer