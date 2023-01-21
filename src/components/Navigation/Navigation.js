import React from 'react';

const Navigation = () => {
    return (
        <div className="navbar px-7 lg:px-28 py-5 lg:py-4 bg-primary">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-primary">
                        <li><a href='*'>Character Design</a></li>
                        <li><a href='*'>Digital Art</a></li>
                        <li><a href='*'>Paintings</a></li>
                        <li><a href='*'>AI Art</a></li>
                    </ul>
                </div>
                <a href='*' className="text-secondary normal-case text-xl font-semibold">Rafi's Art Empire</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a href='*'>Character Design</a></li>
                    <li><a href='*'>Digital Art</a></li>
                    <li><a href='*'>Paintings</a></li>
                    <li><a href='*'>AI Art</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a href='*' className="empireBtn hidden md:block">Get started</a>
            </div>
        </div>
    );
};

export default Navigation;