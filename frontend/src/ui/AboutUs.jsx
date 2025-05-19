import React from 'react'
import { BiCategoryAlt } from "react-icons/bi";
import { BsPersonCheck } from "react-icons/bs";
import { BsPersonVideo3 } from "react-icons/bs";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

const detailItems = [
    {
        id: 1,
        title: '8',
        text: 'دسته بندی موجود در سایت',
        icons: <BiCategoryAlt className='w-7 h-7 text-white' />
    },
    {
        id: 2,
        title: '25',
        text: 'کارفرمایان موجود در سایت',
        icons: <BsPersonVideo3 className='w-7 h-7 text-white' />
    },
    {
        id: 3,
        title: '20',
        text: 'پروژه های ثبت شده',
        icons: <AiOutlineFundProjectionScreen className='w-7 h-7 text-white' />
    },
    {
        id: 4,
        title: '25',
        text: 'فریلنسر های موجود در سایت',
        icons: <BsPersonCheck className='w-7 h-7 text-white' />
    },
]

function AboutUs() {
    return (
        <>
            <div className='aboutBg  lg:p-6 md:p-4 mt-8' id='about'>
                <div className='container my-4 w-auto max-w-screen-lg text-secondary-0 text-center mb-4 space-y-6'>
                    <div className=''>
                        <h2 className='font-ordibehesht text-3xl py-3'>درباره ما</h2>
                        <p className='text-sm pl-4 w-[70%] m-auto'>با تیمی متعهد و پشتیبانی 24 ساعته، همواره آماده‌ایم تا نیازهای شما را برآورده کنیم و تجربه‌ای متفاوت از همکاری آنلاین را رقم بزنیم. به جمع فریلنسرها و کارفرمایان موفق ما بپیوندید و آینده‌ای روشن‌تر بسازید!</p>
                    </div>
                    <div className='grid md:grid-rows-1 md:grid-cols-4 grid-rows-1 grid-cols-2 items-center'>
                        <img className='object-cover rounded-lg w-52 h-36 lg:h-32 lg:w-56 md:w-48 md:h-32' src="/images/team 1.avif" alt="" />
                        <img className='object-cover rounded-lg w-52 h-44 lg:w-56 lg:h-48 md:w-48 md:h-40' src="/images/team 2.avif" alt="" />
                        <img className='hidden md:flex object-cover rounded-lg lg:h-32 lg:w-56 md:w-48 md:h-32' src="/images/team 3.avif" alt="" />
                        <img className='hidden md:flex object-cover rounded-lg lg:w-56 lg:h-48 md:w-48 md:h-40' src="/images/team 4.avif" alt="" />
                    </div>
                </div>
            </div>
            <div className="bg-[url('/images/aboutUs2.png')] w-full md:h-[200px] h-[300px] bg-center-bottom bg-no-repeat bg-cover mb-8 bg-center ">
                <div className='container w-auto max-w-screen-lg grid md:grid-cols-4 md:grid-rows-1 grid-rows-2 grid-cols-2 gap-2 h-full'>
                    {
                        detailItems.map(item => {
                            return <div key={item.id} className='text-center text-white gap-y-4 flex flex-col items-center justify-center'>
                                <div className='bg-primary-800 rounded-3xl rounded-bl-none w-16 py-4  flex items-center justify-center '>
                                    {item.icons}
                                </div>
                                <div>
                                    <h2 className='font-bold'>{item.title}</h2>
                                    <p className='font-bold font-ordibehesht text-xl'>{item.text}</p>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>

        </>
    )
}

export default AboutUs
