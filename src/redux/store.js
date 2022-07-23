import { configureStore } from '@reduxjs/toolkit';

import appApi from './api/apiFetch';
import newGamesSlice from './features/newGamesSlice';

import popularSlice from './features/popularSlice';
import unComingSlice from './features/unComingSlice';

export const store = configureStore({
    reducer: {
        popular: popularSlice,
        upComing: unComingSlice,
        newGames: newGamesSlice,
        [appApi.reducerPath]: appApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(appApi.middleware),

})

