import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const appApi = createApi({
    reducerPath: 'appApi',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
    endpoints: (builder) => ({

      getGameDetails: builder.query({
        query: (id) => `games/${id}?key=${process.env.REACT_APP_API_KEY}`,
      }),
      getGameScreenShotUrl: builder.query({
        query: (id) => `games/${id}/screenshots?key=${process.env.REACT_APP_API_KEY}`
      })

    }),
});

export const { 
  useGetGameDetailsQuery,
  useGetGameScreenShotUrlQuery
} = appApi
export default appApi
