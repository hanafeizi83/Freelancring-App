import React, { useState } from 'react'
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import 'react-phone-number-input/style.css';
import Loader from '../../ui/Loader';

function SendOtpForm({ phoneNumber, setPhoneNumber, onSubmit, isSendingOtp }) {
    const [isValid, setIsValid] = useState(true);

    const handleChange = (newPhoneNumber) => {
        setPhoneNumber(newPhoneNumber);
        setIsValid(isValidPhoneNumber(newPhoneNumber));
    };

    return (
        <div className='w-full'>
            <form className='space-y-3' onSubmit={onSubmit}>
                <div className='space-y-2'>
                    <label htmlFor="phoneNumber" className='text-secondary-800'>شماره تلفن : </label>
                    <PhoneInput
                        defaultCountry='IR'
                        placeholder='شماره تلفن'
                        value={phoneNumber}
                        onChange={handleChange}
                        className='textFailed'
                    />
                    {!isValid && <p style={{ color: 'rgb(var(--color-error))' }}>شماره تلفن وارد شده معتبر نیست.</p>}
                </div>
                {
                    isSendingOtp ? <Loader />
                        : <button className='btn btn--primary w-full'>ارسال کد تایید</button>
                }

            </form>
        </div>
    )
}

export default SendOtpForm
