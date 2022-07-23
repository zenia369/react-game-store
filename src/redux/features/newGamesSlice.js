import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import getDate from '../../helpers/getDate';

export const newGamesFetch = createAsyncThunk(
    'newGames/fetchItmes',
    async () => {
        const infoYear = getDate();

        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}games?key=${process.env.REACT_APP_API_KEY}&dates=${infoYear.last},${infoYear.current}&ordering=-released&page_size=20`);

        return response.data.results
    }
)


const initialState = {
    items: [],
    isLoaded: false,
    error: null
}

const newGamesSlice = createSlice({
    name: 'newGames',
    initialState,
    reducers: {},
    extraReducers: {
        [newGamesFetch.fulfilled]: (state, actions) => {
            state.items = actions.payload;
            state.isLoaded = true;
        },
        [newGamesFetch.rejected]: (state, actions) => {
            state.error = actions.payload.message
        }
    },
});

export const {} = newGamesSlice.actions
export default newGamesSlice.reducer