import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './BlogDetail.css';

// Fallback image
import blogThumb from '../../Assets/Project1.png';

const API_BASE_URL = 'http://localhost:5001';

function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getCoverImage = (coverImage) => {
    if (!coverImage) return blogThumb;
    if (coverImage.startsWith('http')) return coverImage;
    return `${API_BASE_URL}${coverImage}`;
  };

  useEffect(() => {
    const fetchBlog = async () => {
      setLoading(true);
      setError(null);
      try {
        const { data } = await axios.get(`${API_BASE_URL}/api/blogs/${id}`);
        const fetchedBlog = data.data.blog;
        setBlog(fetchedBlog);

        // Fetch related blogs from the same category
        const { data: relatedData } = await axios.get(`${API_BASE_URL}/api/blogs`, {
          params: { published: 'true', category: fetchedBlog.category, limit: 3 },
        });
        setRelatedBlogs(
          relatedData.data.blogs.filter((b) => b._id !== fetchedBlog._id).slice(0, 2)
        );
      } catch (err) {
        setError('Failed to load blog. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <div className='blog-detail-page'>
        <div className='blog-detail-container'>
          <button className='back-to-blog' onClick={() => navigate('/Blogs')}>
            <span>←</span> Back to Blog
          </button>
          <div className='blogs-loading'>Loading blog...</div>
        </div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className='blog-detail-page'>
        <div className='blog-detail-container'>
          <button className='back-to-blog' onClick={() => navigate('/Blogs')}>
            <span>←</span> Back to Blog
          </button>
          <div className='blogs-error'>{error || 'Blog not found.'}</div>
        </div>
      </div>
    );
  }

  return (
    <div className='blog-detail-page'>
      <div className='blog-detail-container'>
        <button className='back-to-blog' onClick={() => navigate('/Blogs')}>
          <span>←</span> Back to Blog
        </button>

        <div className='blog-hero-image'>
          <img src={getCoverImage(blog.coverImage)} alt={blog.title} />
        </div>

        <div className='blog-article'>
          <h1 className='blog-article-title'>{blog.title}</h1>

          <div
            className='blog-article-content rich-content'
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>

        {relatedBlogs.length > 0 && (
          <div className='related-blogs-section'>
            <div className='related-blogs-grid'>
              {relatedBlogs.map((relatedBlog) => (
                <div
                  key={relatedBlog._id}
                  className='related-blog-card'
                  onClick={() => navigate(`/blog/${relatedBlog._id}`)}
                >
                  <div className='related-blog-image'>
                    <img src={getCoverImage(relatedBlog.coverImage)} alt={relatedBlog.title} />
                  </div>
                  <h3 className='related-blog-title'>{relatedBlog.title}</h3>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default BlogDetail;
