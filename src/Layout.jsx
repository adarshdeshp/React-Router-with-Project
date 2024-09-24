import { useState } from 'react';
import './App.css'
import Header from './components/header/header';
import { Outlet } from 'react-router-dom';
import Footer from './components/footer/footer';

function Layout() {

  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout
