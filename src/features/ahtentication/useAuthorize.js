import { useLocation } from 'react-router-dom';
import useUser from './useUser'
export default function useAuthorize() {
    const { isLoading, user } = useUser();
    const { pathname } = useLocation();

    const ROLES = {
        admin: 'ADMIN',
        owner: 'OWNER',
        freelancer: 'FREELANCER'
    }

    let isAthenticated = false;
    if (user) isAthenticated = true;

    let isVerified = false;
    if (user && Number(user.status) === 2) isVerified = true;

    let isAuthorize = false;
    const desiredRole = pathname.split('/').at(1);
    if (user && user.role === ROLES[desiredRole]) isAuthorize = true;

    return { isAthenticated, isVerified, isAuthorize, isLoading }
}