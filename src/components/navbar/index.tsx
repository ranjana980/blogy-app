

'use client'
import React, { useState } from 'react'
import { navItems } from './../../utils/constants/navbar'
import './styles.scss'
import { Menu, Close, EditOutlined } from '@mui/icons-material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname()
    const [openMenu, setOpenMenu] = useState(false)
    const isLoggedIn = true
    const darkBgPath = ['/user/write-blog', '/user/dashboard']
    const isDark = darkBgPath.includes(pathname)

    const toggleMenu = () => {
        setOpenMenu(!openMenu)
    }

    return (
        <nav className="nav fixed" style={{ background: isDark ? '#214252' : 'aliceblue' }}>
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
                        <Link href="/user/write-blog" className='border p-[5px] h-[25px] w-[25px] flex cursor-pointer' ><EditOutlined className='text-[15px]' />
                        </Link>
                        <span>Write</span>
                        <Link className='profile' style={{ background: isDark ? 'aliceblue' : '#214252', color: isDark ? '#214252' : 'aliceblue' }} href="/user/dashboard">RC</Link>
                    </div> : <button className='nav-btn'>Login</button>}
                    {!openMenu ? <Menu className='nav-menu' onClick={toggleMenu} /> : <Close className='nav-menu' onClick={toggleMenu} />}
                </div>
            </div>
            {
                openMenu && <ul className="nav-items-mobile">
                    {navItems.map(({ label, url }: any) => (
                        <li key={label} className={pathname === url ? 'active' : ''}>
                            <a href={url}>{label}</a>
                        </li>
                    ))}
                </ul>
            }
        </nav >
    )
}
