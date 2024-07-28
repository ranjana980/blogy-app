'use client'

import './styles.scss';
import { Article, Home, LocalAtm, Person, Settings } from '@mui/icons-material';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
    const pathname:any = 'Home'


    return (
        <div className='sidebar'>
            <h1 className='ml-4 mt-[40px]'>Hi, Ranjana</h1>
            <ul>
                <li className={pathname === 'Home' ? '' : 'active'}><Home /> <span>Home</span></li>
                <li className={pathname === 'Profile' ? '' : 'active'}><Person /> <span>Profile</span></li>
                <li className={pathname === 'Blogs' ? '' : 'active'}><Article /> <span>Blogs</span></li>
                <li className={pathname === 'Earnings' ? '' : 'active'}><LocalAtm /> <span>Earnings</span></li>
                <li className={pathname === 'Settings' ? '' : 'active'}><Settings /> <span>Settings</span></li>
            </ul>
        </div>
    );
};

export default Sidebar;
