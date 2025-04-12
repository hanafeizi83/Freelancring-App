import React from 'react'
import Header from '../ui/Header'
import useUser from '../features/ahtentication/useUser'
import { useNavigate } from 'react-router-dom';
import SliderHome from '../ui/Slider';
function Home() {
  const navigate = useNavigate();
  const { user } = useUser();
  console.log(user);



  const handleClick = () => {
    switch (user?.role) {
      case 'ADMIN': navigate('/admin'); break;
      case 'OWNER': navigate('/owner'); break;
      case 'FREELANCER': navigate('/freelancer'); break;
    }
  }

  return (
    <>
      <Header />
      <div className='container w-auto max-w-screen-lg'>
        <div className='mt-2 md:flex md:flex-col md:justify-center md:items-center lg:mt-16 lg:flex lg:flex-row lg:items-center lg:justify-between'>
          <img src="./images/home.png" alt="homepage" className='w-full md:w-[80%] lg:w-[60%] ' />
          <div className='w-full space-y-4 md:flex md:flex-col md:justify-center md:items-center lg:w-[40%]'>
            <h2 className='font-ordibehesht text-secondary-800 font-bold w-[100%] text-lg md:w-[80%] md:text-center lg:w-full'>
              سایت‌های فریلنسری به عنوان پلتفرم‌هایی برای ارتباط بین کارفرمایان و فریلنسرها عمل می‌کنند. این سایت‌ها به افراد این امکان را می‌دهند که پروژه‌های مختلف را پیدا کرده و بر اساس مهارت‌ها و تجربیات خود، به انجام آن‌ها بپردازند.
            </h2>
            {
              user ? <button
                onClick={handleClick}
                className='btn btn--primary w-[40%]'>
                ورود به داشبورد
              </button> : <button
                onClick={() => navigate('/auth')}
                className='btn btn--primary w-[30%]'>
                ورود
              </button>
            }

          </div>
        </div>
        <SliderHome />
      </div>
    </>
  )
}

export default Home
