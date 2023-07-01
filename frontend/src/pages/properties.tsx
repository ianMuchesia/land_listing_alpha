import {
  PaginationAction,
  PaginationState,
  typeProperties,
} from "@/@types/@types";
import Refine from "@/components/Refine";

import RefineProperty from "@/components/RefineProperty";

import Head from "next/head";
import { useReducer, useState } from "react";
import { useGetAllPropertiesQuery } from "./redux/services/Api";

import DataLoader from "@/components/Loader/DataLoader";
import Pagination from "@/components/Pagination";

//rtk query type
interface queryData {
  data: {
    nbHits: number;
    properties: typeProperties[];
  };
  isLoading: boolean;
  isSuccess:boolean;
}

//reducer for pagination functionality
const paginationReducer = (
  state: PaginationState,
  action: PaginationAction
): PaginationState => {
  switch (action.type) {
    case "SET_CURRENT_PAGE":
      return { ...state, currentPage: action.payload };
    case "SET_POST_PER_PAGE":
      return { ...state, postPerPage: action.payload };
    case "SET_ALL_PROPERTIES":
      return { ...state, allProperties: action.payload };
    default:
      return state;
  }
};

//initial pagination state
const initialState: PaginationState = {
  currentPage: 1,
  postPerPage: 8,
  allProperties: [],
};

const properties = () => {
  const [state, dispatch] = useReducer(paginationReducer, initialState);

  //filter state
  const [filter, setFilter] = useState({
    location: "",
    sort: "",
    price_min: "",
    price_max: "",
    size_max: "",
    size_min: "",
    search: "",
  });

 

  const { data, isLoading, isSuccess } = useGetAllPropertiesQuery<queryData>({
    location: filter.location,
    sort: filter.sort,
    numericFilters: `area<=${filter.size_max},price>=${filter.price_min}`,
    search: filter.search,
  }
 
  );

  if(isSuccess){
    dispatch({
      type: "SET_ALL_PROPERTIES",
      payload: data.properties
    });
  }

  //pagination logic
  const { currentPage, postPerPage, allProperties } = state;
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;

  const currentPosts = allProperties.slice(firstPostIndex, lastPostIndex);

  console.log(allProperties)

  const totalPages = Math.ceil(allProperties.length / postPerPage);

  const handlePageClick = (page: number) => {
    dispatch({ type: "SET_CURRENT_PAGE", payload: page });
  };

  const handlePreviousPageClick = () => {
    if (currentPage === 1) return;
    dispatch({ type: "SET_CURRENT_PAGE", payload: currentPage - 1 });
  };

  const handleNextPageClick = () => {
    if (currentPage === totalPages) return;
    dispatch({ type: "SET_CURRENT_PAGE", payload: currentPage + 1 });
  };
  return (
    <>
      <Head>
        <title>Properties</title>
        <meta name="description" content="See the available lands for sale" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="wrapper">
        <Refine setFilter={setFilter} filter={filter} />
        {isLoading && (
          <div className="properties__loader">
            <DataLoader />
          </div>
        )}
        {!isLoading && (
          <h4>
            {data?.nbHits} {data?.nbHits !== 1 ? "properties" : "property"}{" "}
            found
          </h4>
        )}
        <div className="properties__page-property-container">
          {data?.nbHits > 0 &&
            currentPosts.map((property) => (
              <RefineProperty property={property} key={property._id} />
            ))}
        </div>
        <div className="pagination__container">
          <Pagination
            handleNextPageClick={handleNextPageClick}
            handlePageClick={handlePageClick}
            handlePreviousPageClick={handlePreviousPageClick}
            totalPages={totalPages}
            currentPage={currentPage}
          />
        </div>
      </main>
    </>
  );
};

export default properties;
