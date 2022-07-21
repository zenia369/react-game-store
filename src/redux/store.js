import { configureStore } from '@reduxjs/toolkit';

import appApi from './api/apiFetch';

import popularSlice from './features/popularSlice';

export const store = configureStore({
    reducer: {
        popular: popularSlice,
        [appApi.reducerPath]: appApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(appApi.middleware),

})

