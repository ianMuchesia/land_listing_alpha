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
    totalProperties: number;
  };
  isLoading: boolean;
  isSuccess:boolean;
}

//reducer for pagination functionality
const initialState : PaginationState ={
  currentPage: 1,
}

const paginationReducer = (state:PaginationState, action:PaginationAction):PaginationState=>{
  switch(action.type){
    case "SET_CURRENT_PAGE":
      return {...state, currentPage:action.payload};
    case "NEXT_PAGE":
      return {
        ...state,
        currentPage:state.currentPage + 1,
      }
    case "PREVIOUS_PAGE":
      return {
        ...state,
        currentPage: state.currentPage - 1,
      }
    default:
      return state;
  }
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
    page:state.currentPage,
  }
 
  );

 
  //pagination logic
  const { currentPage } = state;
  


let totalPages = Math.ceil(data?.totalProperties / 8);


   


  const handlePreviousPageClick = () => {
    if (currentPage === 1) return;
    dispatch({ type: "PREVIOUS_PAGE" });
  };

  const handleNextPageClick = () => {
    if (currentPage === totalPages) return;
    dispatch({ type: "NEXT_PAGE" });
  };

  const handleCurrentPageClick = (page: number) => {
    dispatch({ type: "SET_CURRENT_PAGE", payload: page });
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
            data?.properties.map((property) => (
              <RefineProperty property={property} key={property._id} />
            ))}
        </div>
        <div className="pagination__container">
          <Pagination
            handleNextPageClick={handleNextPageClick}
            handleCurrentPageClick={handleCurrentPageClick}
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
