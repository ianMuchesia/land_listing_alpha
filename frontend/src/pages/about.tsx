import Head from 'next/head'
import React from 'react'
import { Icon } from '@iconify/react';

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
        <div className="about__what-we-do">
          <h4>What We Do</h4>
          <p>At Land Listing, we are passionate about helping individuals and businesses find their perfect piece of land. </p>
        </div>
        <div className="about__content">
          <div className="about__content-container">
            <div className="about__content-card">
            <Icon icon="majesticons:search" className='about__content-icon' />
            <p>Whether you are looking for a residential plot, commercial space, or agricultural land, our platform provides a seamless and efficient way to discover and explore a wide range of land listings from various locations.</p>
            </div>

            <div className="about__content-card">
            <Icon icon="solar:filter-bold-duotone"
            className='about__content-icon' />
            <p>We understand that finding the right land can be a complex and time-consuming process. That's why we have built an intuitive search system that allows you to filter and narrow down your options based on your specific requirements. Our extensive database of land listings ensures that you have access to a diverse selection of properties to choose from.</p>
            </div>


            <div className="about__content-card">
            <Icon icon="carbon:event"  className='about__content-icon'/>
            <p>In addition to browsing through listings, our website also facilitates direct communication between potential buyers and sellers. You can easily contact the sellers, inquire about the details, and schedule site visits directly through our platform. We strive to provide a seamless and transparent experience throughout the land buying process.</p>
            </div>


            <div className="about__content-card">
            <Icon icon="carbon:event"
            className='about__content-icon' />
            <p>Whether you are a first-time buyer or an experienced investor, Land Listing is your trusted companion in finding the right land for your needs. Start your search today and embark on a journey towards owning your dream property.</p>
            </div>
          </div>
        </div>

       
      </div>
   </>
  )
}

export default about