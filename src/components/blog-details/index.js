"use client"
import React, { useEffect, useState } from 'react'
import blogs from "../../utils/constants/data.json"
import { useParams } from 'next/navigation'
import BlogCard from '@/common-components/blog-card'

export default function BlogDetails() {
    const { id } = useParams()
    const [blog, setBlog] = useState({})
    const [relatedBlogs, setRelatedBlogs] = useState([])

    useEffect(() => {
        const foundBlog = blogs.find((item) => item._id === id)
        setBlog(foundBlog)
        setRelatedBlogs(blogs.filter((item) => item.category === foundBlog?.category))
    }, [])

    return (
        <div className='flex mx-12 ml-14 gap-10'>
            <div className='   my-10 w-[80%] '>
                <h2 className='text-[#214252] mb-5 text-start'>{blog?.title}</h2>
                <img src={blog?.blogImage} height={400} width={800} />
                <article className=' mt-5'>{blog?.content}</article>
            </div>
            <div className='flex flex-col mt-5 gap-5 mr-5'>
                <h1 className='text-[black]'>Related Blogs</h1>
                {relatedBlogs.slice(1, relatedBlogs.length)?.map((blogItem) => (
                    <BlogCard isHorizontal {...blogItem} isPorfile isContent />
                ))}
            </div>
        </div>
    )
}
