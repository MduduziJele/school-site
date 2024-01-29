// Blog.tsx
import React from 'react';
import '../css/Blog.css';
import { useNavigate } from 'react-router-dom';
import Card  from './Card'; 
import { cardsData } from './CardData'; 


const Blog: React.FC = () => {
  const navigate = useNavigate();
  

  const onReadMoreClick = () => {
    navigate('/label');
  };

  const onMorePostsClick = () => {
    navigate('/posts');
  };

  return (
    <div>
      <section className="blog-section">
        <div className="header-text">
          <h1>BLOG</h1>
        </div>
        <div className="text-container">         
          <p className="text"> Lorem ipsum dolor sit amet consectetur. Lorem donec interdum elit sit porttitor et consequat. Urna ullamcorper suspendisse auctor lorem diam quis. Adipiscing donec ultrices at et non sed.</p>          
        </div>
        <div className="cards">
          {cardsData.slice(0, 3).map((card, index) =>  (
            <Card
              key={index}
              imageUrl={card.imageUrl}
              title={card.title}
              body={card.body}
              onReadMoreClick={onReadMoreClick}
            />
          ))}
        </div>
        <button className="more-posts-button" onClick={onMorePostsClick}>
          MORE POSTS
        </button>
      </section>
    </div>
  );
};

export default Blog;
