import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {PostDto} from './PostDto.ts';
import {PostListParams} from './PostListParams.ts';

// Define a service using a base URL and expected endpoints
export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/'}),
  endpoints: (builder) => ({
    getPostList: builder.query<PostDto[], PostListParams>({
      query: ({limit}: any) => {
        console.log('p:', limit)
        return `/posts?size=${limit}`;
      },
    }),
    getPostItemById: builder.query<PostDto, PostDto['id']>({
      query: (name) => `posts/${name}`,
    }),
    getPostCommentsItemById: builder.query<PostDto, PostDto['id']>({
      query: (name) => `posts/${name}/comments`,
    }),
  }),
})
