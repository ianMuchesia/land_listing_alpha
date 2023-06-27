import Head from 'next/head'
import React from 'react'

import Link from 'next/link'
import SignUpForm from '@/components/SignUpForm'


const signup = () => {
  return (
    <>
    <Head>
    <title>Next Js Ecommerce</title>
    <meta name="description" content="Shop By in Get COmfy Furnitures" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
 
    <div className="wrapper">
  <SignUpForm/>
   </div>
   </>
  )
}

export default signup