import Head from 'next/head'
import React from 'react'

const about = () => {
  return (
   <>
     <Head>
        <title>About | Land Listing</title>
        <meta name="description" content="Learn more about Land Listing, a platform for finding and listing land properties." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="wrapper">
        <div className="about__header">
        <h1>About Us</h1>
        <p>Welcome to Land Listing, your ultimate destination for finding the perfect land. Our platform provides a seamless and efficient way to explore a diverse range of land listings from various locations. 
        Discover your dream property and connect with trusted sellers through Land Listing.
        </p>
        </div>
      </div>
   </>
  )
}

export default about