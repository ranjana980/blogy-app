'use client'
import React from 'react'
import blogs from "../../utils/constants/data.json"
import BlogCard from '@/common-components/blog-card'

export default function BlogList() {

    return (
        <div className='center-container'>
            <div className='grid grid-cols-12 gap-5 m-5 '>
                {blogs?.map((item) => (
                    <div className='col-span-3' key={item.title} >
                        <BlogCard
                            {...item}
                            isContent
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
