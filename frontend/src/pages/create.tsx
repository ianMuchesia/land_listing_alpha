import Head from 'next/head'
import React from 'react'
import { Icon } from '@iconify/react';
import ImageContainer from '@/components/ImageContainer';
const create = () => {
  return (
    <>
        <Head>
        <title>Land Listing</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="wrapper">
        <h2>Administrator Page</h2>
        <div className="create-container">
        <div className="create_image-upload-container">
       
            <div className="create__image-container_1">
              <h4>Main Image</h4>
          <ImageContainer/>
    
            </div>
            <div className="create__image-container_2">
              <h4>Other Images</h4>
              <div className="image-container-2">
            <input type="file" name={`shop-image`} />
            <input type="file" name={`shop-image`} />
            <input type="file" name={`shop-image`} />
            <input type="file" name={`shop-image`} />
            </div>
            </div>
        </div>
        <div className="create_property-container ">
          <h4>Property Details</h4>
            <div className="create__property-input-name">
                <label htmlFor="property-name" className='form-label'>Property Name</label>
            <input type="text" name="property-name" id="" placeholder='property name' className='form-input' />
            </div>
            <div className="create__property-input-name">
                <label htmlFor="property-price" className='form-label'>Property price</label>
            <input type="number" name="property-price" id="" placeholder='property Price' className='form-input' />
            </div>
            <div className="create__property-input-name">
                <label htmlFor="property-area" className='form-label'>Property Area</label>
            <input type="number" name="property-area" id="" placeholder='property Price' className='form-input' />
            </div>
            <div className="create__property-input-name">
                <label htmlFor="property-location" className='form-label'>Property Location</label>
            <input type="number" name="" id="property-location" placeholder='property Price'  className='form-input'/>
            </div>
            <div className="create__property-input-name">
                <label htmlFor="property-location" className='form-label'>Property Description</label>
            <textarea  name="" id="property-location" placeholder='property Price' className='form-textarea' />
            </div>
          <button className='btn'>Create</button>
        </div>
      </div>
      </div>
    </>
  )
}

export default create