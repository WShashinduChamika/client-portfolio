import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './BlogDetail.css';

// Import images
import blogThumb from '../../Assets/Project1.png';

function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Sample blog data (in real app, fetch based on id)
  const blog = {
    id: id,
    title: 'How to work with Team and client',
    image: blogThumb,
    content: `As in my previous article, this one is also based on my personal experience. This time, I want to share one of the most inspiring examples of leadership I encountered during my university life, where I had the privilege of working with an exceptional leader.

During my internship, I worked as the design team lead for an inter-university hackathon organized by my university. It was my first time leading a team, and honestly, I was hesitant to take on this role. But she and one of my friends pushed me to step up and become the design team leader. Before this, I had worked as a volunteer on different projects, including some small-scale initiatives.

Unlike other leaders I had worked with before, I noticed specific traits in her that made her stand out:

Proper Planning

In the beginning, it was clear that proper planning was essential for organizing this hackathon. This was one of the biggest competitions ever organized by our university, so careful preparation was key. Initially, she, one of our friends, and I worked on planning together.

One common problem I've seen with many leaders is their difficulty in making decisions. They often hesitate and think along the lines of, "Is it possible? Can we really do this? Should we ask someone first?" As a result, they waste so much time gathering opinions from others and end up overwhelmed by excessive information. In the end, they fail to make a decision or change it repeatedly due to a lack of confidence.`
  };

  // Related blogs
  const relatedBlogs = [
    {
      id: 2,
      title: 'How to work with Team and client',
      image: blogThumb
    },
    {
      id: 3,
      title: 'How to work with Team and client',
      image: blogThumb
    }
  ];

  return (
    <div className='blog-detail-page'>
      <div className='blog-detail-container'>
        <button className='back-to-blog' onClick={() => navigate('/blogs')}>
          <span>←</span> Back to Blog
        </button>

        <div className='blog-hero-image'>
          <img src={blog.image} alt={blog.title} />
        </div>

        <div className='blog-article'>
          <h1 className='blog-article-title'>{blog.title}</h1>
          
          <div className='blog-article-content'>
            {blog.content.split('\n\n').map((paragraph, index) => {
              // Check if paragraph is a heading (simple logic)
              if (paragraph.trim().length < 50 && !paragraph.includes('.')) {
                return <h2 key={index} className='blog-section-title'>{paragraph}</h2>;
              }
              return <p key={index} className='blog-paragraph'>{paragraph}</p>;
            })}
          </div>

          <h2 className='blog-section-title'>How to work with Team and client</h2>
          <p className='blog-paragraph'>
            In contrast, she had a remarkable attitude. She took the time to assess the situation, made a clear decision, and then guided her team to achieve it without wavering. She always said, "We can do it," instead of doubting the possibility. Her confidence inspired the team to believe in her, knowing their leader was strong and determined.
          </p>
          
          <h3 className='blog-subsection-title'>Appreciation</h3>
          <p className='blog-paragraph'>
            Appreciation is something that many people overlook, but it's a quality she displayed consistently. Most people tend to focus on finding mistakes rather than acknowledging others' efforts. However, her approach was different. As the design team lead, I frequently needed her approval for our flyers and designs. Whenever I submitted work, even if there were mistakes, she always started by appreciating the effort. She'd say things like, "Great!" or "Wow, this is nice!" before pointing out any issues.
          </p>
          <p className='blog-paragraph'>
            This positivity motivated everyone on the team. As a result, my team members completed their tasks on time, and I didn't need to constantly remind them. It became easier for me to manage the team because they felt valued and encouraged.
          </p>
        </div>

        <div className='related-blogs-section'>
          <div className='related-blogs-grid'>
            {relatedBlogs.map((relatedBlog) => (
              <div 
                key={relatedBlog.id} 
                className='related-blog-card'
                onClick={() => navigate(`/blog/${relatedBlog.id}`)}
              >
                <div className='related-blog-image'>
                  <img src={relatedBlog.image} alt={relatedBlog.title} />
                </div>
                <h3 className='related-blog-title'>{relatedBlog.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetail;
