import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { DataType } from '../utils/types/data';

// Define the base URL
const baseUrl = 'https://eduinfrabrasilservice-restless-feather-1346.fly.dev/';

// Define the API slice
export const dataApi = createApi({
  reducerPath: 'dataApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getStateByCode: builder.query<DataType, string>({
      query: (state) => `ler/${state}`,
    }),
  }),
});

// Export the API and the hooks generated by createApi
export const { useGetStateByCodeQuery } = dataApi;
