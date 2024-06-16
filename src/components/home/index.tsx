
import React from 'react';
import { blogs } from '../../utils/constants/blogs'
import BlogCard from '@/common-components/blog-card';
import './styles.scss'
import bannerImage from './../../assets/images/blog-home-banner.png'

const Home = () => {

    return (
        <div className='home'>
            <div className='home-banner' style={{ backgroundImage: `url(${bannerImage.src})` }}>
                <div className='home-banner-text container'>
                    <h1>Where Knowledge Meets Adventure</h1>
                    <span>Embark on a journey of discovery with our in-depth articles, expert interviews, and real-life experiences on Blogy.</span>
                </div>
                <div className='top-container'>
                    <div className='grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4  '>
                        {blogs.slice(0, 3).map(({ date, author, category, blogImage = "blogImage", name, profile_image }: any) => (
                            <React.Fragment key={name} >
                                <BlogCard
                                    author={author}
                                    blogName={name}
                                    date={date}
                                    category={category}
                                    blogImage={blogImage}
                                    authorImage={profile_image}
                                    className='p-4 md:p-6 lg:p-8 xl:p-10'
                                />
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
            <div className='center-container'>
                <div className='blog-container'>
                    {blogs.slice(3, 7).map(({ date, author, category, blogImage = "blogImage", name, profile_image, description }: any) => (
                        <div key={name} >
                            <BlogCard
                                author={author}
                                blogName={name}
                                date={date}
                                category={category}
                                blogImage={blogImage}
                                authorImage={profile_image}
                                isContent
                                description={description}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
