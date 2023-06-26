import Refine from "@/components/Refine";
import axios from "axios";
import Head from "next/head";
import React,{useState} from "react";

const properties = () => {
    const [refine , setRefine] = useState(false)


  return (
    <>
      <Head>
        <title>Properties</title>
        <meta name="description" content="See the available lands for sale" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="wrapper">
            <div className="properties__header">
                <h4>Lands for Sale in Mombasa</h4>
                <h5>Page 1 of 1</h5>

            </div>
            <div className="properties__header-buttons">
                <button onClick={()=>{setRefine(true)}}>Refine Search</button>
                <button>AiOutlineMenu</button>
            </div>
           
                {refine && <Refine setRefine={setRefine}/>}
            <div className="properties__page-property-container">
                <div className="properties__page-card">
                    <div className="properties__page-image-container">
                        <img src="" alt="" />
                        <span>Icon</span>
                    </div>
                    <div className="properties__page-other-images">
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                    </div>
                    <div className="properties__page-card-contents">
                        <p> Land</p>
                        <p>Ksh. 50000</p>
                        <p><span></span>Location</p>
                        <div className="properties__page-card-icons">

                        </div>
                    </div>
                </div>
            </div>
      </main>
    </>
  );
};

export default properties;



export const getServerSideProps = async()=>{
    try {
      const {data} = await axios.get("http://localhost:4000/api/v1/properties")
      const properties = data.slice(0,5);
  
      return{
        props: {properties},
      }
    } catch (error) {
      return {
        props: { error: 'Failed to fetch properties' },
      };
    }
  }
