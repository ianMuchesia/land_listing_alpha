import { typeProperties } from "@/@types/@types";

import Hero from "@/components/homeComponents/Hero";

import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import { useAppDispatch } from "../redux/Hooks";
import Property from "@/components/homeComponents/Property";
import ChooseUs from "@/components/homeComponents/ChooseUs";
import { checkAuthentication } from "../redux/services/authCheck";

interface Props {
  properties: typeProperties[];
}
export default function Home({ properties }: Props) {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(checkAuthentication());
  }, []);

  console.log(`${process.env.NEXT_PUBLIC_BACKEND_URL}`)
  return (
    <>
      <Head>
        <title>Land Listing</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <div className="wrapper">
        <div className="property-heading wrapper-width">
          <h2>Featured</h2>
        </div>
        <div className="property-container">
          {properties &&
            properties.map((property) => (
              <Property key={property._id} property={property} />
            ))}
        </div>
        <ChooseUs />
        </div>
      </main>
    </>
  );
}

export const getServerSideProps = async () => {
  try {
    const { data } = await axios.get(`${process.env.BACKEND_URL}/api/v1/properties`);

    const properties = data.properties.slice(0, 5);

    return {
      props: { properties },
    };
  } catch (error) {
    return {
      props: { error: "Failed to fetch properties" },
    };
  }
};
