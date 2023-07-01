import { typeProperties } from "@/@types/@types";
import Refine from "@/components/Refine";
import { Icon } from "@iconify/react";
import RefineProperty from "@/components/RefineProperty";
import axios from "axios";
import Head from "next/head";
import { useState } from "react";
import { useGetAllPropertiesQuery } from "./redux/services/Api";
import Loader from "@/components/Loader/Loader";
import DataLoader from "@/components/Loader/DataLoader";


interface queryData {
  data:{
    nbHits: number;
    properties: typeProperties[];
  }
  isLoading:boolean;
}

const properties = () => {
  const [filter, setFilter] = useState({
    location: "",
    sort: "",
    price_min: "",
    price_max: "",
    size_max: "",
    size_min: "",
    search:'',
  });

 

  const { data , isLoading } = useGetAllPropertiesQuery<queryData>({
    location:filter.location,
    sort: filter.sort,
    numericFilters: `area<=${filter.size_max},price>=${filter.price_min}`,
    search:filter.search

  })


 

  
  
  return (
    <>
      <Head>
        <title>Properties</title>
        <meta name="description" content="See the available lands for sale" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="wrapper">
        <Refine  setFilter={setFilter} filter={filter}/>
        {isLoading && <div className="properties__loader">
      <DataLoader/>
        </div>}
       {!isLoading && <h4>{data?.nbHits} {data?.nbHits !== 1? "properties":"property" } found</h4>}
        <div className="properties__page-property-container">
            {data?.nbHits>0 &&
            data?.properties.map((property) => (
              <RefineProperty property={property} key={property._id} />
            ))}  
            
        </div>
      </main>
    </>
  );
};

export default properties;

export const getServerSideProps = async () => {
  try {
    const { data } = await axios.get("http://localhost:4000/api/v1/properties");
    const properties = data;

    return {
      props: { properties },
    };
  } catch (error) {
    return {
      props: { error: "Failed to fetch properties" },
    };
  }
};
