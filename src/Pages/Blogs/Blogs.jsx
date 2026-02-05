import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Blogs.css';
import Navbar from '../../Components/Navbar/Navbar';

// Import blog thumbnail image
import blogThumb from '../../Assets/Project1.png';

function Blogs() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('All');

  // Sample blog data
  const blogs = [
    {
      id: 1,
      title: 'How to work with Team and client',
      description: 'As in my previous article, this one is also based on my personal experience. This time, I want to share one of the most inspiring examples of leadership I encountered during my university life, where I had the privilege of working with an exceptional leader...',
      image: blogThumb,
      category: 'Design'
    },
    {
      id: 2,
      title: 'How to work with Team and client',
      description: 'As in my previous article, this one is also based on my personal experience. This time, I want to share one of the most inspiring examples of leadership I encountered during my university life, where I had the privilege of working with an exceptional leader...',
      image: blogThumb,
      category: 'Our Mind'
    },
    {
      id: 3,
      title: 'How to work with Team and client',
      description: 'As in my previous article, this one is also based on my personal experience. This time, I want to share one of the most inspiring examples of leadership I encountered during my university life, where I had the privilege of working with an exceptional leader...',
      image: blogThumb,
      category: 'Design'
    },
    {
      id: 4,
      title: 'How to work with Team and client',
      description: 'As in my previous article, this one is also based on my personal experience. This time, I want to share one of the most inspiring examples of leadership I encountered during my university life, where I had the privilege of working with an exceptional leader...',
      image: blogThumb,
      category: 'Others'
    }
  ];

  const categories = ['All', 'Design', 'Our Mind', 'Others'];

  const filteredBlogs = activeCategory === 'All' 
    ? blogs 
    : blogs.filter(blog => blog.category === activeCategory);

  const handleBlogClick = (blogId) => {
    navigate(`/blog/${blogId}`);
  };

  return (
    <div className='blogs-page'>
      <Navbar />
      <div className='blogs-container'>
        <h1 className='blogs-main-title'>Let's Talk Everything</h1>
        
        <div className='blog-categories'>
          {categories.map((category) => (
            <button
              key={category}
              className={`category-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className='blogs-list'>
          {filteredBlogs.map((blog) => (
            <div 
              key={blog.id} 
              className='blog-card'
              onClick={() => handleBlogClick(blog.id)}
            >
              <div className='blog-image-container'>
                <img src={blog.image} alt={blog.title} className='blog-image' />
              </div>
              <div className='blog-content'>
                <h2 className='blog-title'>{blog.title}</h2>
                <p className='blog-description'>{blog.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs;