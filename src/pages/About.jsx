import React from 'react'

function About() {
  return (
    <div className='container w-full flex flex-col items-center justify-center lg:flex lg:flex-row lg:gap-x-5 xl:gap-x-10 xl:max-w-screen-lg lg:justify-between lg:mt-10'>
      <img src="images/about.png" alt="about me" className='w-[80%] lg:w-[50%] xl:w-[40%]' />
      <div className='w-[90%] py-5 space-y-3 text-center lg:w-[55%] lg:text-right' >
        <h2 className='font-ordibehesht font-bold text-6xl text-secondary-900'>هانا فیضی</h2>
        <p className='text-secondary-500'>A Frontend Developer</p>
        <p className='font-lalezar font-bold text-secondary-700'>
          من در حوزه های react , javascript , css , git ,tailwindcss و... مهارت دارم

          بیش از 7 ماه است که به صورت حرفه ای آموزش می بینم واین یکی از نمونه کارهای من است که با بک اند واقعی
          استاد عزیزم صاحب محمدی پیاده شده است که ازش خیلی مهارت های جدید یادگرفتم
        </p>
      </div>
    </div>
  )
}

export default About
