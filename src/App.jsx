import { useState } from 'react'

import './App.css'
import Navbar from './components/navbar/Navbar'
import Banner from './components/banner/Banner'
import Footer from './components/footer/Footer'
import Section from './components/section/Section'

function App() {
  
  const [bidNow, setBidNow] = useState([]);

  const handleBidItems = (table)=>{
    setBidNow([...bidNow, table])
  }



  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Section handleBidItems={handleBidItems} bidNow={bidNow}></Section>

      <Footer></Footer>

      
    </>
  )
}

export default App
