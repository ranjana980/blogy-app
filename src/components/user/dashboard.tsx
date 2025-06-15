"use client"
import React, { useEffect, useState } from 'react'
import Sidebar from './sidebar'
import './styles.scss'
import users from './../../utils/constants/users.json'
import axios from 'axios'
import { BarChart } from '@mui/x-charts/BarChart';

export default function UserDashboard() {
    const [blogs, setBlogs] = useState([])
    const [userDetails, setUserDetails]: any = useState(users.find((item) => item.is_logged_in))

    const getBlogs = async () => {
        const result = await axios.get('/api/blogs')
        setBlogs(result.data.data)
    }

    useEffect(() => {
        getBlogs()
    }, [])

    const data = blogs.filter((filterValue: any) => filterValue.user_id === userDetails._id).map((item: any) => {
        return { likes: item.likes, comments: item.comments, rating: item.rating, title: item.title }
    })

    const datasets = data?.map((item) => {
        return { data: Object.values(item).filter((values) => typeof values === 'number').map((value) => value), label: item.title }
    })


    return (
        <div className='flex h-[600px] mt-2 mb-2'>
            <Sidebar />
            <div className='user-details mt-2' style={{ margin: '2%', }}>
                <h2 className='mb-5'>Data Visulizations</h2>
                <BarChart
                    xAxis={[{
                        data: ["Likes", 'comment', "Ratings"]
                    }]}
                    series={datasets}
                    height={300}
                    width={1000}
                />
            </div>
        </div>
    )
}
