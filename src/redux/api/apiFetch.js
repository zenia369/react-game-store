import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import getDate from '../../helpers/getDate';

const appApi = createApi({
    reducerPath: 'appApi',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.BASE_URL }),
    endpoints: (builder) => ({

      getPopularGames: builder.query({
        query: () => {
            const infoYear = getDate();

            return `games?dates=${infoYear.last},${infoYear.current}&ordering=-rating&page_size=20`
        },
      }),

    }),
});

export const { 
  useGetPopularGamesQuery
} = appApi
export default appApi
