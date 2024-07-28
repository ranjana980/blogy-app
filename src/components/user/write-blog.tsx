"use client";

import { useState } from 'react';
import './styles.scss';

const WriteBlog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert('Blog post submitted!');
  };

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader: any = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

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
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="formGroup">
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>
      <div className="formGroup">
        <label htmlFor="image">Blog Banner Image</label>
        <div className='formGroupImage'><input
          type="file"
          id="image"
          accept="image/*"
          onChange={handleImageChange}
        /></div>
        {imagePreview && (
          <div className="imagePreview">
            {imagePreview}
            <img src={imagePreview} alt="Preview" />
          </div>
        )}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default WriteBlog;
