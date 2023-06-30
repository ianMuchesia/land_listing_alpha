import { typeProperties } from "@/@types/@types";
import Refine from "@/components/Refine";
import { Icon } from "@iconify/react";
import RefineProperty from "@/components/RefineProperty";
import axios from "axios";
import Head from "next/head";


interface Props {
  properties: typeProperties[];
}

const properties = ({ properties }: Props) => {
  return (
    <>
      <Head>
        <title>Properties</title>
        <meta name="description" content="See the available lands for sale" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="wrapper">
        <Refine />

        <div className="properties__page-property-container">
          {properties &&
            properties.map((property) => (
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
