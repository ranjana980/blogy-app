'use client'

import React, { useState } from 'react'
import { navItems } from './../../utils/constants/navbar'
import { usePathname, useRouter } from 'next/navigation';
import './styles.scss'
import { Menu, Close, EditOutlined } from '@mui/icons-material';
import { Box } from '@mui/material';

export default function Navbar() {
    const pathname = usePathname()
    const [openMenu, setOpenMenu] = useState(false)
    const router = useRouter()
    const isLoggedIn = true
    const darkBgPath = ['/user/write-blog', '/user/dashboard']
    const isDark = darkBgPath.includes(pathname)

    const toggleMenu = () => {
        setOpenMenu(!openMenu)
    }



    return (
        <nav className="nav" style={{ background: isDark ? '#214252' : 'aliceblue' }}>
            <div className="nav-items" >
                <a href="/" className="site-logo" style={{ color: isDark ? 'aliceblue' : '#214252' }}>Blogy<span className="text-primary">.</span></a>
                <ul className="nav-items-container" style={{ color: isDark ? 'aliceblue' : '#214252', fontWeight: isDark ? '400' : '600' }}>
                    {navItems.map(({ label, url }: any) => (
                        <li key={label} className={pathname === url ? 'active' : ''}>
                            <a href={url}>{label}</a>
                        </li>
                    ))}
                </ul>
                <div className='flex gap-[10px]'>
                    {isLoggedIn ? <div className='flex gap-[12px] justify-content-center align-items-center'>
                        <Box onClick={() => router.push('/user/write-blog')} sx={{
                            border: '1px solid',
                            padding: '5px',
                            height: '25px',
                            width: '25px',
                            display: 'flex',
                            cursor: 'pointer'
                        }}><EditOutlined className='text-[15px]' />
                        </Box>
                        <span>Write</span>
                        <div className='profile' style={{ background: isDark ? 'aliceblue' : '#214252', color: isDark ? '#214252' : 'aliceblue' }} onClick={() => router.push('/user/dashboard')}>RC</div>
                    </div> : <button className='nav-btn'>Login</button>}
                    {!openMenu ? <Menu className='nav-menu' onClick={toggleMenu} /> : <Close className='nav-menu' onClick={toggleMenu} />}
                </div>
            </div>
            {openMenu && <ul className="nav-items-mobile">
                {navItems.map(({ label, url }: any) => (
                    <li key={label} className={pathname === url ? 'active' : ''}>
                        <a href={url}>{label}</a>
                    </li>
                ))}
            </ul>}
        </nav>
    )
}
