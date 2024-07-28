"use client"

import React, { useEffect } from 'react'
import Sidebar from './sidebar'
import './styles.scss'
import TableComponent from '@/common-components/table-component'
import axios from 'axios'

export default function Dashboard() {
    function createData(
        name: string,
        calories: number,
        fat: number,
        carbs: number,
        protein: number,
    ) {
        return { name, calories, fat, carbs, protein };
    }

    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];

    const handleGetData = async () => {
        const result = await axios.get('/api/blogs')
        console.log(result, 'resultss')
    }

    useEffect(() => {
        handleGetData()
    }, [])

    return (
        <div className='flex h-[600px] mt-2 mb-2'>
            <Sidebar />
            <div className='user-details mt-2' style={{ margin: '2%', }}>
                <h2 className='mb-5'>Your Articles</h2>
                <TableComponent data={rows} />
            </div>
        </div>
    )
}
