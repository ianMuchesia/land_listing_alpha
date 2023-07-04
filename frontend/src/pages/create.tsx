import Head from 'next/head'
import React, { useEffect } from 'react'


import useAuthorization from '@/utils/authorize';
import { useAppDispatch, useAppSelector } from './redux/Hooks';
import checkAuthentication from './redux/services/authCheck';
import ImagesUpload from '@/components/createComponents/ImagesUpload';
const create = () => {

 

  const dispatch = useAppDispatch()

  // useAuthorization(user.role) 

  useEffect(()=>{dispatch(checkAuthentication()); }, [])
  const user = useAppSelector(state=>state.auth.user)
  
  console.log(user)
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
        <h3>Welcome {user.name}</h3>
        <div className="create-container">
      <ImagesUpload/>
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