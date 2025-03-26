import React from 'react'
import { NavLink } from 'react-router-dom';

function CustomeNavLink({to , children}) {
    const afterClass = "after:shadow-[-20px_-20px_0_10px] after:shadow-secondary-100 after:content-[''] after:w-[20px] after:duration-0 hover:bg-secondary-100 hover:text-primary-800 after:transition-all after:h-[20px] after:bg-transparent after:shadow-secondary-0 after:absolute after:-bottom-[20px] after:rounded-[50%] after:left-0 "
    const beforeClass = "before:shadow-[-20px_20px_0_10px]  before:shadow-secondary-100 before:content-[''] before:w-[20px] before:duration-0 before:transition-all before:h-[20px] before:bg-transparent before:shadow-secondary-0 before:absolute before:-top-[20px] before:rounded-[50%] before:left-0 "
    const hoverClass = "hover:bg-secondary-100 hover:text-primary-800 hover:after:shadow-[-20px_-20px_0_10px] hover:after:shadow-secondary-100 hover:after:content-[''] hover:after:w-[20px] hover:after:duration-0 hover:after:transition-all hover:after:h-[20px] hover:after:bg-transparent hover:after:shadow-secondary-0 hover:after:absolute hover:after:-bottom-[20px] hover:after:rounded-[50%] hover:after:left-0 hover:before:shadow-[-20px_20px_0_10px]  hover:before:shadow-secondary-100 hover:before:content-[''] hover:before:w-[20px] hover:before:duration-0 hover:before:transition-all hover:before:h-[20px] hover:before:bg-transparent hover:before:shadow-secondary-0 hover:before:absolute hover:before:-top-[20px] hover:before:rounded-[50%] hover:before:left-0 "
    const navLinkClass = `rounded-tr-lg rounded-br-lg flex items-center gap-x-3 px-2 py-2 transition-all duration-100 relative `;
    return (
        <li>
            <NavLink
                to={to}
                className={({ isActive }) =>
                    isActive ? `${navLinkClass} ${beforeClass} ${afterClass} ${hoverClass} bg-secondary-100 text-primary-800  ` : `${navLinkClass} bg-primary-800  ${hoverClass}`
                }
            >
                {children}
            </NavLink>
        </li>
    )
}

export default CustomeNavLink
