import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react'
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import 'react-phone-number-input/style.css';
import { sendOtpApi } from '../../services/authentication';
import toast from 'react-hot-toast';

function SendOtpForm() {
    const [phoneNumber, setPhoneNumber] = useState();
    const [isValid, setIsValid] = useState(true);
    const { isPending, mutateAsync } = useMutation({
        mutationFn: sendOtpApi
    })

    const handleChange = (newPhoneNumber) => {
        setPhoneNumber(newPhoneNumber);
        setIsValid(isValidPhoneNumber(newPhoneNumber));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await mutateAsync({ phoneNumber });
            toast.success('کد تایید با موفقیت ارسال شد')
        } catch (error) {
            toast.error(error?.response?.data?.message)
        }

    }

    return (
        <div className='w-full'>
            <form className='space-y-3' onSubmit={handleSubmit}>
                <div className='space-y-2'>
                    <label htmlFor="phoneNumber" className=''>شماره تلفن : </label>
                    <PhoneInput
                        defaultCountry='IR'
                        placeholder='شماره تلفن'
                        value={phoneNumber}
                        onChange={handleChange}
                        className='textFailed'
                    />
                    {!isValid && <p style={{ color: 'rgb(var(--color-error))' }}>شماره تلفن وارد شده معتبر نیست.</p>}
                </div>
                <button className='btn btn--primary w-full'>تایید</button>
            </form>
        </div>
    )
}

export default SendOtpForm
