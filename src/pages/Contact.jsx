import React from 'react'

function Contact() {
    return (
        <div className='container w-full flex flex-col items-center justify-center  mt-3 lg:mt-10  xl:max-w-screen-lg'>
            <h2 className='font-ordibehesht text-3xl text-secondary-900 mb-5'>راه های ارتباط با ما</h2>
            <div className=' w-full text-center grid grid-cols-1 grid-rows-3  md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 md:gap-x-3 gap-y-3'>
                <CustomContactItem
                    title={'تماس با ما'}
                    img={'phone.png'}
                    information={[
                        { id: 1, value: '+98 990 329 2264' },
                        { id: 2, value: '087 3345 7948' }
                    ]}
                />
                <CustomContactItem
                    title={'آدرس ما'}
                    img={'location.png'}
                    information={[
                        { id: 1, value: 'سنندج ، خیابان مولوی ، پلاک 19' }
                    ]}
                />
                <CustomContactItem
                    title={'ایمیل ما'}
                    img={'email.png'}
                    information={[
                        { id: 1, value: 'hanafaizi83@gmail.com' }
                    ]}
                />
            </div>
        </div>
    )
}

export default Contact


function CustomContactItem({ img, title, information }) {
    return <div className='flex flex-col items-center justify-center gap-y-2 bg-secondary-0 shadow-lg rounded-xl'>
        <div className='w-28 h-28 rounded-full bg-primary-800 p-6 flex items-center justify-center'>
            <img src={`/images/${img}`} alt="phone" className='' />
        </div>
        <div className='text-center space-y-1'>
            <h2 className='font-ordibehesht font-bold text-secondary-800 text-3xl'>{title} </h2>
            {
                information.map(info => 
                    <p className='text-secondary-600' key={info.id}>{info.value}</p>
            )}
        </div>
    </div>
}