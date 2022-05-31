import React from 'react'
import Header from './components/header/header'
import Nav from './components/nav/Nav'
import About from './components/about/about'
import Experience from './components/Experience/Experience'
import Contacts from './components/contacts/Contacts'

const  App = () => {
  return (
    <>
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        <Contacts/>
    </>
  )
  
}

export default App