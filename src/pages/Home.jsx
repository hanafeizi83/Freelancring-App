import React from 'react'
import Header from '../ui/Header'

function Home() {
  return (
    <>
      <Header />
      <div className='container w-auto max-w-screen-lg flex items-center '>
        <img src="./images/home.png" alt="homepage" className='w-1/2  ' />
      </div>
    </>
  )
}

export default Home
