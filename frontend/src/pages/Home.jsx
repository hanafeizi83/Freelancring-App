import React, { useEffect, useState } from 'react'
import { AiFillSafetyCertificate } from "react-icons/ai"
import { SiAntdesign } from "react-icons/si"
import { IoCodeWorking } from "react-icons/io5"
import { BiSupport } from "react-icons/bi";
import useUser from '../features/ahtentication/useUser'
import { useNavigate } from 'react-router-dom';
import SliderHome from '../ui/Slider';
import AboutUs from '../ui/AboutUs';
import ContactUs from '../ui/ContactUs';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import DarkMode from '../ui/DarkMode';
import { useDarkMode } from '../context/DarkModeProvider';

function Home() {
  const [scroll, setScroll] = useState(false);
  const { isDarkMode } = useDarkMode();
  const [logo, setLogo] = useState('');
  const navigate = useNavigate();
  const { user } = useUser();

  const handleClick = () => {
    switch (user?.role) {
      case 'ADMIN': navigate('/admin'); break;
      case 'OWNER': navigate('/owner'); break;
      case 'FREELANCER': navigate('/freelancer'); break;
    }
  }
  const reasonOptions = [
    {
      id: 1,
      text: 'پلتفرم امن و قابل اعتماد',
      icon: <AiFillSafetyCertificate className='reasonIcon' />
    },
    {
      id: 2,
      text: 'تنوع فرصت های شغلی',
      icon: <SiAntdesign className='reasonIcon' />
    },
    {
      id: 3,
      text: 'رابط کاربری ساده و کاربر پسند',
      icon: <IoCodeWorking className='reasonIcon' />
    },
    {
      id: 4,
      text: 'پشتیبانی 24 ساعته',
      icon: <BiSupport className='reasonIcon' />
    },
  ]
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setScroll(window.pageYOffset > 150)
      );
    };
  }, []);
  useEffect(() => {
    if (isDarkMode) setLogo('logo white.png');
    else setLogo('logo black.png');
  }, [isDarkMode])

  return (
    <>
      {/* Header */}
      <div className={`col-span-1 ${scroll ? 'bg-secondary-0' : ''} fixed top-0 w-full z-50`}>
        <div className={`container  py-1 flex items-center justify-between xl:max-w-screen-lg`}>
          <div className='flex items-center '>
            <img src={`/images/${logo}`} alt="logo" className='w-12 h-10' />
            <h2 className='font-ordibehesht text-lg text-secondary-900'>کارجو</h2>
          </div>
          <ul className='flex items-center gap-x-5 md:gap-x-8 list-none'>
            <a href="/">
              <li
                className='HeaderLi HeaderLiAfter HeaderLiAfterHover'
                onClick={() => navigate('/')}
              >خانه</li>
            </a>
            <a href="#about">
              <li
                className='HeaderLi HeaderLiAfter HeaderLiAfterHover'
              >درباره ما</li>
            </a>
            <a href="#contact">
              <li
                className='HeaderLi HeaderLiAfter HeaderLiAfterHover'
              >تماس با ما</li>
            </a>

          </ul>
          <ul className='flex items-center gap-x-4 list-none'>
            <li className='flex'>
              <DarkMode />
            </li>
          </ul>
        </div>
      </div>
      {/* Setion One */}
      <div className='container w-auto max-w-screen-lg mt-12'>
        <div className='mt-2 md:flex md:flex-col md:justify-center md:items-center  lg:flex lg:flex-row lg:items-center lg:justify-between'>
          <img src="./images/Home (1).png" alt="homepage" className='w-full md:w-[65%] lg:w-[50%] ' />
          <div className='w-full space-y-4 flex flex-col justify-center items-start lg:w-[40%]'>
            <h1 className='font-ordibehesht text-secondary-800 font-bold text-7xl'><span className='text-primary-600'>پروژه رویایی</span> تو همین جا پیدا کن</h1>
            <h2 className=' text-sm text-secondary-600 w-[100%] md:w-[80%] text-right font-thin lg:w-full'>
              در سایت ما، شما به راحتی می‌توانید پروژه مورد نظر خود را جستجو
              و پیدا کنید. چه در زمینه طراحی، برنامه‌نویسی یا هر حوزه دیگری پروژه‌های متنوع و مناسب را بیابید. همچنین اگر شما کارفرما هستید و نیاز به همکاری با
              متخصصان دارید، می‌توانید پروژه خود را در سایت قرار دهید تا بهترین افراد و
              تیم‌ها بتوانند درخواست همکاری دهند و پروژه‌تان را به بهترین شکل انجام دهند.
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
      </div>
      <SliderHome />
      {/* Setion why our website */}
      <div className='container w-auto max-w-screen-lg flex flex-col md:flex-row-reverse items-center'>
        <div className='flex-1 '>
          <img src="images/Desktop - 4.png" alt="" />
        </div>
        <div className='flex-1 space-y-4'>
          <h2 className='font-ordibehesht font-extrabold text-3xl text-secondary-900'>چرا وبسایت ما ؟</h2>
          <p className='text-sm text-secondary-500'>در سایت ما، شما به راحتی می‌توانید پروژه مورد نظر خود را جستجو
            و پیدا کنید. چه در زمینه طراحی، برنامه‌نویسی یا هر حوزه دیگری،
            پروژه‌های متنوع و مناسب را بیابید.
            همچنین اگر شما کارفرما هستید
            ، می‌توانید پروژه خود را در سایت قرار دهید تا بهترین افراد و تیم‌ها بتوانند
            درخواست همکاری دهند و پروژه‌تان را به بهترین شکل انجام دهند. هدف ما
            فراهم کردن بستری امن و کارآمد برای ارتباط میان کارفرماها و فریلنسرها
            است تا هر دو طرف بتوانند به راحتی نیازهای خود را برآورده کنند.</p>
          <div className='grid grid-cols-2 grid-rows-2 gap-2'>
            {
              reasonOptions.map(item => <ReasonItems key={item.id} icon={item.icon} text={item.text} />)
            }
          </div>
        </div>
      </div>
      {/* AboutUs */}
      <AboutUs />
      <ContactUs />
      {/* Footer */}
      <footer className='py-2 bg-primary-800'>
        <div className='container w-auto max-w-screen-lg flex flex-col sm:flex-row gap-y-2 items-center justify-between '>
          <div className='flex  items-center '>
            <img src="/images/logo white.png" alt="logo" className='w-12 h-10' />
            <h2 className='font-ordibehesht text-lg text-white'>کارجو</h2>
          </div>
          <h2 className='text-white font-thin text-sm'>تمامی حقوق این سایت مختص به تیم کارجو است</h2>
          <div className='flex items-center gap-x-4'>
            <div className='footerIcon'>
              <FaFacebookF className='text-white' />
            </div>
            <div className='footerIcon'>
              <FaTwitter className='text-white' />
            </div>
            <div className='footerIcon'>
              <FaLinkedinIn className='text-white' />
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Home


function ReasonItems({ text, icon }) {
  return <div className='flex items-center text-secondary-900 gap-x-2'>
    <div className='w-7 h-7 rounded-full bg-primary-900 flex items-center justify-center'>
      {/* <AiFillSafetyCertificate className='text-secondary-0' /> */}
      {icon}
    </div>
    <span className='font-ordibehesht text-lg'>{text}</span>
  </div>
}