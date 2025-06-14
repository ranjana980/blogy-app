'use client'
import React from 'react'
import blogs from "../../utils/constants/data.json"
import BlogCard from '@/common-components/blog-card'
import axios from 'axios'

export default function BlogList() {

    const handleDelete = (id) => {
        axios.delete(`/api/blogs/delete/${id}`)
    }

    return (
        <div className='center-container'>
            <div className='grid grid-cols-12 gap-5 m-5 '>
                {blogs?.map((item) => (
                    <div className='col-span-3' key={item.title} >
                        <BlogCard
                            {...item}
                            handleDelete={() => handleDelete(item?._id)}
                            isContent
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
