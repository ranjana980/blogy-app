
'use client'
import React, { useEffect, useState } from 'react';
import BlogCard from '@/common-components/blog-card';
import './styles.scss'
import bannerImage from './../../assets/images/blog-home-banner.png'
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';

const Home = () => {
    const [blogs, setBlogs]: any = useState([])

    const getBlogs = async () => {
        const result = await axios.get('/api/blogs')
        setBlogs(result.data.data)
    }

    useEffect(() => {
        getBlogs()
    }, [])

    return (
        <div className='home mb-10'>
            <div className='home-banner' style={{ backgroundImage: `url(${bannerImage.src})` }}>
                <div className='home-banner-text'>
                    <h1>Where Knowledge Meets Adventure</h1>
                    <span>Embark on a journey of discovery with our in-depth articles, expert interviews, and real-life experiences on Blogy.</span>
                </div>
                <div className='top-container'>
                    <div className='grid  grid-cols-12 gap-4  '>
                        {blogs?.slice(0, 3).map((item: any) => (
                            <React.Fragment key={item.title} >
                                <BlogCard
                                    {...item}
                                    className='p-4 md:p-6 lg:p-8 xl:p-10 '
                                />
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
            {blogs.length < 1 ? <div className='flex justify-center items-center'><CircularProgress /> </div> : <div className='center-container'>
                < div className='blog-container grid grid-cols-12 gap-5 flex'>
                    {blogs?.slice(3, 11).map((item: any) => (
                        <div key={item.title} className='lg:col-span-3 md:col-span-6 col-span-12 md:my-0 mx-3'>
                            <BlogCard
                                {...item}
                                isContent
                            />
                        </div>
                    ))}
                </div>
            </div >}
        </div >
    );
}

export default Home;
