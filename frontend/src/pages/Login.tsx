import Head from 'next/head'
import React from 'react'
import Link from 'next/link'
import LoginForm from '@/components/authComponents/LoginForm'


const login = () => {
  return (
    <>
    <Head>
    <title>Land_listing</title>
    <meta name="description" content="Login to land-listing website" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </Head>

    <main className="wrapper">
    <LoginForm/>
   </main>
   </>
  )
}

export default login