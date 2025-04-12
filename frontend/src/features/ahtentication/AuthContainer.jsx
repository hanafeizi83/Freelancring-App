import React, { useState } from 'react'
import SendOtpForm from './SendOtpForm';
import CheckOtpForm from './CheckOtpForm';
import { useMutation } from '@tanstack/react-query';
import { sendOtpApi } from '../../services/authentication';
import toast from 'react-hot-toast';

function AuthContainer() {
    const [step, setStep] = useState(1);
    const [phoneNumber, setPhoneNumber] = useState();
    const phone = phoneNumber?.slice(3)?.padStart(11, 0);
    const { isPending: isSendingOtp, mutateAsync, data } = useMutation({
        mutationFn: sendOtpApi
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { message } = await mutateAsync({ phoneNumber: phone });
            toast.success(message);
            setStep(2)
        } catch (error) {
            toast.error(error?.response?.data?.message)
        }

    }

    function renderStep() {
        switch (step) {
            case 1: return <SendOtpForm
                phoneNumber={phoneNumber}
                setPhoneNumber={setPhoneNumber}
                setStep={setStep}
                onSubmit={handleSubmit}
                isSendingOtp={isSendingOtp}
            />
            case 2: return <CheckOtpForm
                phoneNumber={phone}
                onSendOtp={handleSubmit}
                onBack={() => setStep(1)}
                otpResponse={data.message}
            />
            default: return null
        }
    }
    return (
        <div className='w-full'>
            {renderStep()}
        </div>
    )
}

export default AuthContainer
