"use client"
import React, { useEffect, useState } from 'react'
import Sidebar from './sidebar'
import './styles.scss'
import TableComponent from '@/common-components/table-component'
import axios from 'axios'
import { ThumbUp, Comment, Edit, Delete } from '@mui/icons-material'


export default function Dashboard() {
    const [blogs, setBlogs] = useState([])

    const getBlogs = async () => {
        const result = await axios.get('/api/blogs')
        setBlogs(result.data.data)
    }

    useEffect(() => {
        getBlogs()
    }, [])

    const rows = blogs?.map((item: any) => {
        return Object.entries(item).map(([key, value]: any, index1) => {
            return {
                image: item.blog_image ?? "",
                title: item.title,
                author: item.author,
                content: item.content,
                date_published: item?.date_published,
                likes: <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}><ThumbUp sx={{ color: '#ff9800' }} /><b >{item.likes}</b></div>,
                comments: <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}><Comment sx={{ color: '#ff9800' }} /><b >{item?.comments}</b></div>,
                action: <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}><Edit sx={{ cursor: 'pointer', color: 'green' }} /><Delete onClick={() => handleDelete(item._id)} sx={{ cursor: 'pointer', color: 'red' }} /></div>
            }
        })
    })

    const handleDelete = (id: any) => {
        axios.delete(`/api/blogs/delete/${id}`)
    }

    const coulmns = [

        {
            title: "Image",
            accessor: "image",
            type: "image"
        },
        {
            title: "Title",
            accessor: "title",
            type: "text"
        },
        {
            title: "Author",
            accessor: "author",
            type: "text"
        },
        {
            title: "Content",
            accessor: "content",
            type: "text"
        },
        {
            title: "Published Date",
            accessor: "date_published",
            type: "date"
        },
        {
            title: "Likes",
            accessor: "likes",
            type: "node"
        },
        {
            title: "Comments",
            accessor: "comments",
            type: "node"
        },
        {
            title: "Action",
            accessor: "action",
            type: "node"
        }
    ]

    return (
        <div className='flex h-[600px] mt-2 mb-2'>
            <Sidebar />
            <div className='user-details mt-2' style={{ margin: '2%', }}>
                <h2 className='mb-5'>Your Articles</h2>
                <TableComponent coulmns={coulmns} data={rows} />
            </div>
        </div>
    )
}
