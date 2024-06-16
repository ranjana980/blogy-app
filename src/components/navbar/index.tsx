'use client'

import React from 'react'
import { navItems } from './../../utils/constants/navbar'
import { usePathname } from 'next/navigation';
import './styles.scss'

export default function Navbar() {
    const pathname = usePathname()

    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-items">
                    <a href="/" className="site-logo">Blogy<span className="text-primary">.</span></a>
                    <ul className="nav-items-container">
                        {navItems.map(({ label, url }: any) => (
                            <li key={label} className={pathname === url ? 'active' : ''}>
                                <a href={url}>{label}</a>
                            </li>
                        ))}
                    </ul>
                    <button className='login-btn'>Login</button>
                </div>
            </div>
        </nav>
    )
}
