import React from 'react'
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet'
import 'leaflet/dist/leaflet.css';


function ContactUs() {
    return (
        <div id='contact' className='container mb-10 w-auto max-w-screen-lg flex flex-col sm:flex-row items-center justify-between gap-y-4 sm:gap-x-4'>
            <div className='w-full sm:flex-1 space-y-4'>
                <h2 className='font-ordibehesht font-bold text-2xl text-secondary-900'>با ما در ارتباط باشید </h2>
                <p className='text-secondary-600 text-sm pb-6'>ما در کارجو همواره آماده پاسخگویی به سوالات و نیازهای شما هستیم. اگر نیاز به راهنمایی، پشتیبانی یا اطلاعات بیشتری دارید، لطفاً با ما تماس بگیرید</p>
                <hr className='border-secondary-300' />
                <h2 className='font-ordibehesht text-2xl text-secondary-800'>سنندج ، بهاران ، پارک علم و فناوری ، طبقه دوم ، واحد 4</h2>
                <div className='flex items-center gap-x-4'>
                    <LiaPhoneVolumeSolid className='-rotate-90 w-12 h-12 text-error' />
                    <div>
                        <p className='text-lg text-secondary-800'>support@karjo.com</p>
                        <p className='text-lg text-secondary-800'>0990-329-2264</p>
                    </div>
                </div>
            </div>
            <div className='w-full sm:flex-1 h-80 rounded-lg'>
                <MapContainer center={[35.26996093162649, 46.99904541468864]} zoom={13} scrollWheelZoom={true} style={{ position: 'relative', width: '100%', height: '100%', borderRadius: '.3rem' }} >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[35.26996093162649, 46.99904541468864]}>
                        <Popup>
                            پارک علم و فناوری سنندج <br />
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    )
}

export default ContactUs
