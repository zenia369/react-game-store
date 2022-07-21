import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const getDate = () => {
    const date = new Date();
    const month = (date.getMonth() + 1) < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    const year = date.getFullYear();
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();

    return {
        current: `${year}-${month}-${day}`,
        last: `${year - 1}-${month}-${day}`,
        next: `${year + 1}-${month}-${day}`
    }
}

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
