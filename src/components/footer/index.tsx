import React from 'react'
import './styles.scss'
import { blogs } from '@/utils/constants/blogs'
import { Facebook, Instagram, LinkedIn, Pinterest, Twitter } from '@mui/icons-material';
import { format } from 'date-fns';

export default function Footer() {

    const formatDate = (date: string) => {
        return format(new Date(date), 'MMM d, yyyy');
    };

    const renderBlogEntries = () => {
        return blogs.slice(0, 3).map(({ date, blogImage = "blogImage", name }) => (
            <li key={name} >
                <a href="#" className="flex align-items-center gap-4">
                    <img src={blogImage} alt="Blog Image" height={140} width={100} className="rounded" />
                    <div className="text">
                        <h4>{name}</h4>
                        <div className="post-meta">
                            <span className="blog-date">{formatDate(date)}</span>
                        </div>
                    </div>
                </a>
            </li>
        ));
    };

    return (
        <footer className="site-footer ">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 footer-conatiner">
                <div>
                    <h3 className="mb-4">About</h3>
                    <p className='w-[300px] text-wrap'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <h3>Social</h3>
                    <ul className="flex gap-4 mt-5">
                        <li><a href="#"><Instagram /></a></li>
                        <li><a href="#"><Twitter /></a></li>
                        <li><a href="#"><Facebook /></a></li>
                        <li><a href="#"><LinkedIn /></a></li>
                        <li><a href="#"><Pinterest /></a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="mb-4">Company</h3>
                    <div className='flex gap-5'>
                        <ul >
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Vision</a></li>
                            <li><a href="#">Mission</a></li>
                            <li><a href="#">Terms</a></li>
                            <li><a href="#">Privacy</a></li>
                        </ul>
                        <ul >
                            <li><a href="#">Partners</a></li>
                            <li><a href="#">Business</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Creative</a></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h3 className="mb-4">Recent Post Entry</h3>
                    <ul className="post-entry-footer flex flex-col gap-4">
                        {renderBlogEntries()}
                    </ul>
                </div>
            </div>
            <div className="text-center mt-5 ">
                <p className='pb-5'>Copyright &copy;<script>document.write(new Date().getFullYear());</script>. All Rights Reserved. &mdash; Designed with love by <a href="https://untree.co">Untree.co</a> Distributed by <a href="https://themewagon.com">ThemeWagon</a>
                </p>
            </div>
        </footer>
    )
}
