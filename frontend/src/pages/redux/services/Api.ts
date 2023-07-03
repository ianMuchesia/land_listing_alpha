
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const api = createApi({
    baseQuery : fetchBaseQuery({baseUrl: "http://localhost:4000/api/v1"}),

    reducerPath: "apis",
    tagTypes: [
        "singleProperty",
        "allProperties"
    ],
    endpoints: (build)=>({
        getAllProperties:build.query({
            query:({location , search , sort,numericFilters, page})=>({
                url: "properties",
                method: "GET",
                params: {search , sort , location, numericFilters, page}
            }),
            
        providesTags: ['allProperties']
        })
    })
   
})

export const {useGetAllPropertiesQuery} = api