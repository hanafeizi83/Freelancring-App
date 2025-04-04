import React from 'react'
import Header from '../ui/Header'

function Home() {
  return (
    <>
      <Header />
      <div className='container w-auto max-w-screen-lg flex  justify-between mt-16'>
        <img src="./images/home.png" alt="homepage" className='w-[60%]  ' />
        <div className='w-[40%] mt-20 space-y-8'>
          <h2 className='font-ordibehesht font-bold w-[100%] text-lg'>
            سایت‌های فریلنسری به عنوان پلتفرم‌هایی برای ارتباط بین کارفرمایان و فریلنسرها عمل می‌کنند. این سایت‌ها به افراد این امکان را می‌دهند که پروژه‌های مختلف را پیدا کرده و بر اساس مهارت‌ها و تجربیات خود، به انجام آن‌ها بپردازند.
          </h2>
          <button className='btn btn--primary w-[30%]'>
            ورود
          </button>
        </div>
      </div>
    </>
  )
}

export default Home
