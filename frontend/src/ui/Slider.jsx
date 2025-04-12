import React from 'react'
import 'swiper/css';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';



function SliderHome() {
  return (
    <div className='py-4'>
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
        <SwiperSlide>
          <div className='flex justify-center'>
            <img src="/images/home 1.png" alt="home" />
          </div>
          <h1>سریال آخرین بازمانده از ما به کارگردانی جرمی وب و کریگ مازیـن در ســــال 2023 ساخته شده است. این سریــال محصــول کشـور آمریکا و کانـادا و در ژانـــر اکشـــن و ماجراجویی می‌باشـد. در ایـــن سریـال پدرو پاسکال، بلا رمـــزی، گابریــل لونا، مــرل دندریج، جفری پیـرس، آنا تورو و نیک آفرمن بــه هنرمندی پرداخته‌اند.</h1>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex justify-center'>
            <img src="/images/home 1.png" alt="home" />
          </div>
          <h1>سریال آخرین بازمانده از ما به کارگردانی جرمی وب و کریگ مازیـن در ســــال 2023 ساخته شده است. این سریــال محصــول کشـور آمریکا و کانـادا و در ژانـــر اکشـــن و ماجراجویی می‌باشـد. در ایـــن سریـال پدرو پاسکال، بلا رمـــزی، گابریــل لونا، مــرل دندریج، جفری پیـرس، آنا تورو و نیک آفرمن بــه هنرمندی پرداخته‌اند.</h1>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex justify-center'>
            <img src="/images/home 1.png" alt="home" />
          </div>
          <h1>سریال آخرین بازمانده از ما به کارگردانی جرمی وب و کریگ مازیـن در ســــال 2023 ساخته شده است. این سریــال محصــول کشـور آمریکا و کانـادا و در ژانـــر اکشـــن و ماجراجویی می‌باشـد. در ایـــن سریـال پدرو پاسکال، بلا رمـــزی، گابریــل لونا، مــرل دندریج، جفری پیـرس، آنا تورو و نیک آفرمن بــه هنرمندی پرداخته‌اند.</h1>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex justify-center'>
            <img src="/images/home 1.png" alt="home" />
          </div>
          <h1>سریال آخرین بازمانده از ما به کارگردانی جرمی وب و کریگ مازیـن در ســــال 2023 ساخته شده است. این سریــال محصــول کشـور آمریکا و کانـادا و در ژانـــر اکشـــن و ماجراجویی می‌باشـد. در ایـــن سریـال پدرو پاسکال، بلا رمـــزی، گابریــل لونا، مــرل دندریج، جفری پیـرس، آنا تورو و نیک آفرمن بــه هنرمندی پرداخته‌اند.</h1>
        </SwiperSlide>
      </Swiper>
    </div>

  )
}

export default SliderHome
