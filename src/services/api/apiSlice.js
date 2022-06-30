import {
    createApi,
    fetchBaseQuery
  } from "@reduxjs/toolkit/query/react";
  
  export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
      baseUrl: "https://ab91-203-82-55-110.ngrok.io/"
    }),
    tagTypes: ['Post', 'User'],
    endpoints: builder => ({})
  });
