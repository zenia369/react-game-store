import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import getDate from '../../helpers/getDate';

export const unComingFetch = createAsyncThunk(
    'unComing/fetchItmes',
    async () => {
        const infoYear = getDate();

        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}games?key=${process.env.REACT_APP_API_KEY}&dates=${infoYear.current},${infoYear.next}&ordering=-added&page_size=20`);

        return response.data.results
    }
)


const initialState = {
    items: [],
    isLoaded: false,
    error: null
}

const unComingSlice = createSlice({
    name: 'unComing',
    initialState,
    reducers: {},
    extraReducers: {
        [unComingFetch.fulfilled]: (state, actions) => {
            state.items = actions.payload;
            state.isLoaded = true;
        },
        [unComingFetch.rejected]: (state, actions) => {
            state.error = actions.payload.message
        }
    },
});

export const {} = unComingSlice.actions
export default unComingSlice.reducer