import React from 'react'
import { NavLink } from 'react-router-dom';

function CustomeNavLink({ to, children }) {
    const afterClass = "after:shadow-[-20px_-20px_0_10px] after:shadow-secondary-100 after:w-[20px] after:duration-0 hover:bg-secondary-100 hover:text-primary-800 after:transition-all after:h-[20px] after:bg-transparent after:shadow-secondary-0 after:absolute after:-bottom-[20px] after:rounded-[50%] after:left-0 "
    const beforeClass = "before:shadow-[-20px_20px_0_10px]  before:shadow-secondary-100 before:w-[20px] before:duration-0 before:transition-all before:h-[20px] before:bg-transparent before:shadow-secondary-0 before:absolute before:-top-[20px] before:rounded-[50%] before:left-0 "
    const hoverClass = "hover:after:content-[''] hover:before:content-['']"
    const navLinkClass = `rounded-tr-lg rounded-br-lg flex items-center gap-x-3 px-2 py-2 relative `;
    return (
        <li>
            <NavLink
                to={to}
                className={({ isActive }) =>
                    isActive ? `${navLinkClass} ${beforeClass} ${afterClass} !after:content-[''] !before:content-['']  bg-secondary-100 text-primary-800  ` : `${navLinkClass} after:content-none before:content-none bg-primary-800 ${beforeClass} ${afterClass}  ${hoverClass}`
                }
            >
                {children}
            </NavLink>
        </li>
    )
}

export default CustomeNavLink
