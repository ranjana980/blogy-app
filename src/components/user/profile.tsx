'use client'
import { AddPhotoAlternate } from '@mui/icons-material'
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material'
import React, { useState } from 'react'
import './styles.scss';
import Sidebar from './sidebar';
import users from './../../utils/constants/users.json'
import axios from 'axios';

export default function Profile() {
    const [userDetails, setUserDetails]: any = useState(users.find((item) => item.is_logged_in))

    const handleSubmit = (e: any) => {
        e.preventDefault()
        axios.post('/api/blogs/update', userDetails, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
    }

    const handleChange = (e: any) => {
        setUserDetails({ ...userDetails, [e.target.name]: e.target.value })
    }

    return (
        <div className='flex h-[600px] mt-2 mb-2'>
            <Sidebar />
            <form onSubmit={handleSubmit} className="container">
                <div className="header">
                    <h1>Update Your Profile</h1>
                </div>
                <div className="formGroup">
                    <label htmlFor="user_name">User Name</label>
                    <input
                        type="text"
                        id="userName"
                        name="user_name"
                        value={userDetails?.user_name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="formGroup">
                    <label htmlFor="category">Gender</label>
                    <FormControl>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            value={userDetails?.gender}
                            onChange={handleChange}
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <div className="formGroup">
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={userDetails?.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="formGroup">
                    <label htmlFor="phone">Phone</label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={userDetails?.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="formGroup">
                    <AddPhotoAlternate className='cursor-pointer text-white' />
                    {/* {imagePreview && (
                    <div className="imagePreview">
                        {imagePreview}
                        <img src={imagePreview} alt="Preview" />
                    </div>
                )} */}
                </div>
                <button type="submit">Update</button>
            </form >
        </div>
    )
}
