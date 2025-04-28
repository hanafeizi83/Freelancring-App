import React from 'react'
import 'swiper/css';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';

const sliderItemData = [
  {
    id: 1,
    image: 'home 1.png',
    title: 'دیدن نمای کلی از داشبورد',
    body: 'در هنگام ورود به داشبور خود در یک نما خلاصه ای از اطلاعات خود را می توان مشاهده کردد'
  },
  {
    id: 2,
    image: 'home 2.png',
    title: 'امکان مرتب سازی پروژه ها',
    body: 'امکان مرتب سازی بر اساس وضعیت ، دسته بندی و زمان ایجاد انها وجود دارد'
  },
  {
    id: 3,
    image: 'home 3.png',
    title: 'امکانات داشبورد کارفرما',
    body: 'در داشبورد کارفرما امکان افزودن پروژه و تغییر وضعیت پروژه و امکان مشاهده همه درخواست های پروژه هاوجود دارد '
  },
  {
    id: 4,
    image: 'home 4.png',
    title: 'امکانات داشبورد فریلنسر',
    body: 'در داشبورد فریلنسر امکان ایجاد درخواست برای هر کدام از پروژه ها ، و مشاهده درخواست ها وجود دارد'
  }]

function SliderHome() {
  return (
    <div className='py-4'>
        <h2 className='font-bold text-xl pb-6'>دیدن نماهایی از پروژه</h2>
        <Swiper
          spaceBetween={50}
          modules={[Navigation, Pagination]}
          slidesPerView={3}
          pagination={{ clickable: true }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          navigation
          loop={true}
          Autoplay={{ delay: 20 }}
        >
          {
            sliderItemData.map(item => (
              <SwiperSlide>
                <div className='flex justify-center'>
                  <img src={`/images/${item.image}`} alt="home" className='rounded-lg' />
                </div>
                <h2 className='font-bold text-secondary-800 text-lg text-center'>{item.title}</h2>
                <p className='text-secondary-600 text-center'>{item.body}</p>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>

  )
}

export default SliderHome
