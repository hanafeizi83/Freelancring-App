import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react'
import OTPInput from 'react-otp-input';
import { checkOtpApi } from '../../services/authentication';
import toast from 'react-hot-toast';
import Loader from '../../ui/Loader';
import Timer from '../../ui/Timer';
import { MdEdit } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

let INITIOL_STATE = 10;
function CheckOtpForm({ phoneNumber, onSendOtp, otpResponse, onBack }) {
    const [otp, setOtp] = useState('');
    const [time, setTime] = useState(INITIOL_STATE)
    const navigate = useNavigate();
    const { isPending, mutateAsync } = useMutation({
        mutationFn: checkOtpApi
    })


    const handleCheckOtp = async (e) => {
        e.preventDefault();
        try {
            const { user, message } = await mutateAsync({ phoneNumber, otp });
            toast.success(message)
            if (!user.isActive) return navigate('/compelete-profile');
            if (user.status !== 2) {
                navigate('/')
                toast('پروفایل شما در انتظار تایید است', { icon: '⚠' });
                return;
            }
            if ('OWNER') return navigate('/owner')
            if ('FREELANCER') return navigate('/freelancer')
            if ('ADMIN') return navigate('/admin')

        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
    }


    return (
        <div className="w-full">
            <div className='flex items-center w-full justify-center mb-4'>
                {
                    time > 0 ? <Timer
                        setTime={setTime}
                        initialRemainingTime={time}
                    /> : <button className='btn btn--secondary' onClick={onSendOtp}>ارسال مجدد کد تایید</button>
                }
            </div>
            <div className='w-full flex items-center gap-4 mb-4'>
                <h3 className='text-sm'>{otpResponse}</h3>
                <button className='text-success' onClick={onBack}>
                    <MdEdit />
                </button>
            </div>
            <form className='space-y-5' onSubmit={handleCheckOtp}>
                <h2 className='font-bold'>کد تایید خود را وارد کنید </h2>
                <OTPInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={6}
                    renderSeparator={<span className='text-primary-400'>-</span>}
                    renderInput={(props) => <input {...props} />}
                    containerStyle='flex items-center justify-evenly flex-row-reverse'
                    inputStyle='border p-2 !w-10 rounded-md border-primary-500 outline-none focus:border-primary-900 transition-all duration-300'

                />
                {
                    isPending ? <Loader /> :
                        <button type='submit' className='btn btn--primary w-full'>تایید </button>
                }
            </form>
        </div>

    )
}

export default CheckOtpForm
