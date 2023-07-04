import Head from 'next/head'
import React, {ReactNode, useEffect} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useAppDispatch } from '@/redux/Hooks';
import checkAuthentication from '@/redux/services/authCheck';


interface LayoutProps {
    children: ReactNode;
  }

const Layout = ({ children }:LayoutProps) => {
 

    return (
      <div className="">
        <Head>
          <title>Example Store</title>
        </Head>
        <header>
          <Navbar />
        </header>
        <main className="main-container layout">
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    )
  }
  
  export default Layout