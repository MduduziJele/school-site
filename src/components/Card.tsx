import React, { useState, useEffect } from 'react';
import IMG from '../images/IMG.jpg';
import axios from 'axios';

interface Post {
  postTitle: string;
  postContent:string;
}

interface CardProps {
  imageUrl: string;
  title: string;
  body: string;
  onReadMoreClick: () => void;
}

const Card: React.FC<CardProps> = ({ onReadMoreClick }) => {
  const [posts, setPosts] = useState<Array<Post>>([]);
  const [err, setError] = useState('');

  const fetchPosts = () => {
    getPosts()
      .then(res => {
        setPosts(res.data);
        console.log(res.data);
      })
      .catch(err => {
        setError(err.response.data.message);
      });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const getPosts = async () => {
    try {
      return await axios.get("http://localhost:8080/api/auth/all/post");
    } catch (e) {
      throw e;
    }
  };

  return (
    <>
      {posts.slice(0,3).map((post, id) => {
        return (
          <div className="card" key={id}>
            <img src={IMG} alt="" className="card-image" />
            <div className="card-content">
              <div className='card-content-title'>
                <h1 className="card-title">{post.postTitle}</h1>
              </div>
              <div className='text-body'>
                <p className="card-body">{post.postContent}</p>
              </div>
              <button className="read-more-button" onClick={onReadMoreClick}>
                Read More
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
