import React, { useEffect } from 'react'
import useAuthorize from '../features/ahtentication/useAuthorize'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import Loader from './../ui/Loader'

function ProtectedRoute({ children }) {
    const { isAthenticated, isLoading, isVerified, isAuthorize } = useAuthorize();
    const navigate = useNavigate();
    useEffect(() => {
        if (!isLoading && !isVerified) {
            navigate('/');
            toast.error('پروفایل شما هنوز تایید نشده');
        }
        if (!isLoading && !isAthenticated) {
            navigate('/auth');
        }
        if (!isLoading && !isAuthorize) {
            navigate('/not-access')
        }
    }, [isAthenticated, isAuthorize, isVerified, navigate])
    if (isLoading) return <div className='flex items-center h-screen justify-center bg-secondary-100'>
        < Loader />
    </div >

    if (isAthenticated && isAuthorize) return children

}

export default ProtectedRoute
