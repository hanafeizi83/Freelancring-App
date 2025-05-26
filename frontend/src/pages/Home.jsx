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
import Logout from '../features/ahtentication/Logout';

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
  //  className='absolute h-auto top-0 left-0 -z-10'
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" className='absolute h-[40rem] top-0 right-8 -z-10' version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" viewBox="0 0 800 800"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="vvvortex-grad"><stop stop-color="rgb(219, 226, 255)" stop-opacity="1" offset="0%"></stop><stop stop-color="rgb(74, 109, 255)" stop-opacity="1" offset="100%"></stop></linearGradient></defs><g stroke="url(#vvvortex-grad)" fill="none" stroke-linecap="round"><circle r="363" cx="400" cy="400" stroke-width="11" stroke-dasharray="35 46" stroke-dashoffset="25" transform="rotate(20, 400, 400)" opacity="0.05"></circle><circle r="346.5" cx="400" cy="400" stroke-width="11" stroke-dasharray="35 27" stroke-dashoffset="25" transform="rotate(271, 400, 400)" opacity="0.10"></circle><circle r="330" cx="400" cy="400" stroke-width="10" stroke-dasharray="41 37" stroke-dashoffset="25" transform="rotate(95, 400, 400)" opacity="0.14"></circle><circle r="313.5" cx="400" cy="400" stroke-width="10" stroke-dasharray="25 18" stroke-dashoffset="25" transform="rotate(165, 400, 400)" opacity="0.19"></circle><circle r="297" cx="400" cy="400" stroke-width="10" stroke-dasharray="42 48" stroke-dashoffset="25" transform="rotate(20, 400, 400)" opacity="0.23"></circle><circle r="280.5" cx="400" cy="400" stroke-width="10" stroke-dasharray="34 44" stroke-dashoffset="25" transform="rotate(217, 400, 400)" opacity="0.28"></circle><circle r="264" cx="400" cy="400" stroke-width="9" stroke-dasharray="32 29" stroke-dashoffset="25" transform="rotate(350, 400, 400)" opacity="0.32"></circle><circle r="247.5" cx="400" cy="400" stroke-width="9" stroke-dasharray="53 39" stroke-dashoffset="25" transform="rotate(208, 400, 400)" opacity="0.37"></circle><circle r="231" cx="400" cy="400" stroke-width="9" stroke-dasharray="38 32" stroke-dashoffset="25" transform="rotate(41, 400, 400)" opacity="0.41"></circle><circle r="214.5" cx="400" cy="400" stroke-width="8" stroke-dasharray="54 12" stroke-dashoffset="25" transform="rotate(193, 400, 400)" opacity="0.46"></circle><circle r="198" cx="400" cy="400" stroke-width="8" stroke-dasharray="32 37" stroke-dashoffset="25" transform="rotate(277, 400, 400)" opacity="0.50"></circle><circle r="181.5" cx="400" cy="400" stroke-width="8" stroke-dasharray="35 43" stroke-dashoffset="25" transform="rotate(303, 400, 400)" opacity="0.55"></circle><circle r="165" cx="400" cy="400" stroke-width="8" stroke-dasharray="47 33" stroke-dashoffset="25" transform="rotate(70, 400, 400)" opacity="0.59"></circle><circle r="148.5" cx="400" cy="400" stroke-width="7" stroke-dasharray="11 46" stroke-dashoffset="25" transform="rotate(37, 400, 400)" opacity="0.64"></circle><circle r="132" cx="400" cy="400" stroke-width="7" stroke-dasharray="26 19" stroke-dashoffset="25" transform="rotate(16, 400, 400)" opacity="0.68"></circle><circle r="115.5" cx="400" cy="400" stroke-width="7" stroke-dasharray="32 43" stroke-dashoffset="25" transform="rotate(19, 400, 400)" opacity="0.73"></circle><circle r="99" cx="400" cy="400" stroke-width="6" stroke-dasharray="49 24" stroke-dashoffset="25" transform="rotate(60, 400, 400)" opacity="0.77"></circle><circle r="82.5" cx="400" cy="400" stroke-width="6" stroke-dasharray="17 18" stroke-dashoffset="25" transform="rotate(287, 400, 400)" opacity="0.82"></circle><circle r="66" cx="400" cy="400" stroke-width="6" stroke-dasharray="17 13" stroke-dashoffset="25" transform="rotate(350, 400, 400)" opacity="0.86"></circle><circle r="49.5" cx="400" cy="400" stroke-width="6" stroke-dasharray="12 25" stroke-dashoffset="25" transform="rotate(354, 400, 400)" opacity="0.91"></circle><circle r="33" cx="400" cy="400" stroke-width="5" stroke-dasharray="48 47" stroke-dashoffset="25" transform="rotate(105, 400, 400)" opacity="0.95"></circle><circle r="16.5" cx="400" cy="400" stroke-width="5" stroke-dasharray="29 13" stroke-dashoffset="25" transform="rotate(350, 400, 400)" opacity="1.00"></circle></g></svg>
      {/* Header */}
      <div className={`col-span-1 ${scroll ? 'bg-secondary-0' : ''} fixed top-0 w-full z-50`}>
        <div className={`container z-10 py-1 flex items-center justify-between xl:max-w-screen-lg`}>
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
            {
              user &&
              <li className='flex'>
                <Logout />
              </li>
            }
          </ul>
        </div>
      </div>
      {/* Setion One */}
      <div className='container w-auto max-w-screen-lg mt-12 z-10 '>
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
                className='btn btn--primary w-[40%] text-secondary-800'>
                ورود به داشبورد
              </button> : <button
                onClick={() => navigate('/auth')}
                className='btn btn--primary w-[30%] text-secondary-800'>
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