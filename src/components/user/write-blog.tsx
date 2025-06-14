"use client";

import { useState } from 'react';
import './styles.scss';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { AttachFile } from '@mui/icons-material';

const WriteBlog = () => {
  const _id = uuidv4()
  const [formData, setFormData] = useState({
    _id,
    date_published: new Date(),
    title: "",
    category: "",
    content: "",
    author: "",
    profile_image: "",
    rating: 0,
    blogImage: "",
    likes: 0,
    comments: 0,
  })

  const [imagePreview, setImagePreview] = useState('');
  const [message, setMessage] = useState('')

  const handleSubmit = (e: any) => {
    e.preventDefault();
    axios.post('/api/blogs/add', formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
  };

  const handleUpload = (file: string) => {
    try {
      const res = axios.post('/api/blogs/upload', { file })
      setMessage("File uploaded Successfully")
    } catch (error) {
      setMessage('Error uploading file.');
    }
  }

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      handleUpload(file)
    }
  };

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <form onSubmit={handleSubmit} className="container">
      <div className="header">
        <h1>Write a New Blog</h1>
      </div>
      <div className="formGroup">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData?.title}
          onChange={handleChange}
          required
        />
      </div>
      <div className="formGroup">
        <label htmlFor="category">Cateory</label>
        <input
          type="text"
          id="category"
          value={formData?.category}
          name="category"
          onChange={handleChange}
          required
        />
      </div>

      <div className="formGroup">
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          value={formData?.content}
          name="content"
          onChange={handleChange}
          required
        />
      </div>
      <div className="formGroup">
        <AttachFile className='cursor-pointer text-white' />
        {imagePreview && (
          <div className="imagePreview">
            {imagePreview}
            <img src={imagePreview} alt="Preview" />
          </div>
        )}
      </div>
      <button type="submit">Submit</button>
    </form >
  );
};

export default WriteBlog;
