import React, { useRef } from 'react'
import 'swiper/css';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css/pagination';
import { FiPenTool } from "react-icons/fi";
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { AiOutlineTranslation } from "react-icons/ai";
import { TbFileTypeTxt } from "react-icons/tb";
import { MdOutlineDocumentScanner } from "react-icons/md";
import { PiDropboxLogoLight } from "react-icons/pi";
import { LiaPhotoVideoSolid } from "react-icons/lia";


const sliderItemData = [
  {
    id: 1,
    icon: <FiPenTool className='sliderIcon text-yellow-400' />,
    title: 'طراحی ui / ux',
  },
  {
    id: 2,
    icon: <LiaLaptopCodeSolid className='sliderIcon text-primary-900' />,
    title: 'برنامه نویسی',
  },
  {
    id: 3,
    icon: <AiOutlineTranslation className='sliderIcon text-green' />,
    title: 'ترجمه',
  },
  {
    id: 4,
    icon: <TbFileTypeTxt className='sliderIcon text-pink' />,
    title: 'تایپ',
  },
  {
    id: 5,
    icon: <LiaPhotoVideoSolid className='sliderIcon text-purple' />,
    title: 'ادیت عکس و فیلم',
  },
  {
    id: 6,
    icon: <MdOutlineDocumentScanner className='sliderIcon text-rose-600' />,
    title: 'رزومه نویسی',
  },
  {
    id: 7,
    icon: <PiDropboxLogoLight className='sliderIcon text-sky-500' />,
    title: 'طراحی لوگو',
  }]

function SliderHome() {
  const swiperRef = useRef();

  return (
    <>
      <div className='container w-auto max-w-screen-lg relative mt-5 mb-10'>
        <h2 className='font-ordibehesht font-bold text-2xl py-4 text-secondary-800'>دسته بندی های مشاغل</h2>
        <div className='flex items-center w-full'>
          <button className='sliderBtn mx-4' onClick={() => swiperRef.current?.slidePrev()}><IoIosArrowForward className='text-xl' /></button>

          <Swiper
            breakpoints={{
              992: {
                width: 992,
                slidesPerView: 5,
              },
              768: {
                width: 768,
                slidesPerView: 4,
              },
              576: {
                width: 576,
                slidesPerView: 3,
              },
              300: {
                width: 300,
                slidesPerView: 1,
              },
            }}
            modules={[Navigation]}
            slidesPerView={5}
            loop
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            className='lg:w-[90%] md:w-[80%] sm:w-[50%]'
          >
            {
              sliderItemData.map(item => {
                return <SwiperSlide style={{}}> <div className='bg-secondary-0 w-40 border border-secondary-400 rounded-md p-4 flex flex-col items-center gap-y-2'>
                  <div className='w-16 h-16 rounded-full bg-secondary-100 border border-md border-secondary-200 flex items-center justify-center'>
                    {item.icon}
                  </div>
                  <h2 className='font-ordibehesht text-lg text-secondary-800'>{item.title}</h2>
                </div></SwiperSlide>
              })
            }

          </Swiper>
          <button className='sliderBtn' onClick={() => swiperRef.current?.slideNext()}><IoIosArrowBack className='text-xl ' /></button>
        </div>
      </div>
    </>
  )
}

export default SliderHome
