import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { baseURL } from '../../baseURL'



export const api  = createApi({
    baseQuery: fetchBaseQuery({baseUrl:`${baseURL}`}),
    reducerPath: "apis",
    tagTypes:[
        "allProperties",
        "singleProperty",
    ],
    endpoints: (build)=>({
        getAllProperties: build.query({
            query:({location , search , sort,numericFilters})=>({
                url: "properties",
                method: "GET",
                params: {search , sort , location, numericFilters}
            }),
        providesTags: ["allProperties"]
        }),
        getSingleProperty:build.query({
            query:(id:string)=>`properties/${id}`,
            providesTags:["singleProperty"]
        }),
    })
})


export const { useGetAllPropertiesQuery, useGetSinglePropertyQuery} = api 