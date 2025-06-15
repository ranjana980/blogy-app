'use client'

import Link from 'next/link';
import './styles.scss';
import { Article, Dashboard, LocalAtm, Person, Settings } from '@mui/icons-material';

const Sidebar = () => {
    const pathname: any = 'Home'

    return (
        <div className='sidebar'>
            <h1 className='ml-4 mt-[40px]'>Hi, Ranjana</h1>
            <ul>
                <Link href='/user/dashboard' className={pathname === 'Home' ? ' cursor-pointer p-2' : ' cursor-pointer p-2 active'}><Dashboard /> <span>Dashboard</span></Link>
                <Link href='/user/profile' className={pathname === 'Profile' ? ' cursor-pointer p-2' : ' cursor-pointer p-2 active'}><Person /> <span>Profile</span></Link>
                <Link href='/user/blogs' className={pathname === 'Blogs' ? ' cursor-pointer p-2' : ' cursor-pointer p-2 active'}><Article /> <span>Blogs</span></Link>
                <Link href='/user/Earnings' className={pathname === 'Earnings' ? ' cursor-pointer p-2' : ' cursor-pointer p-2 active'}><LocalAtm /> <span>Earnings</span></Link>
                <Link href='/user/Settings' className={pathname === 'Settings' ? ' cursor-pointer p-2' : ' cursor-pointer p-2 active'}>
                    <Settings /> <span>Settings</span>
                </Link>
            </ul>
        </div>
    );
};

export default Sidebar;
