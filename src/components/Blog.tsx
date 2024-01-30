import '../css/Blog.css';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
interface Post {
  postTitle: string;
  postContent:string;
  postImage: string;
  postId :number;
}

const Blog: React.FC = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<Array<Post>>([]);
  const [err, setError] = useState('');
  const [showFullContent, setShowFullContent] = useState<number | null>(null);

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
      const response = await axios.get("http://localhost:8080/api/auth/all/post");
      const postsWithImages = response.data.map((post) => {
        const imageFileName = post.imageFileName;
        console.log(imageFileName);
        return { ...post, imageFileName };
      });
      setPosts(postsWithImages);
      console.log(postsWithImages)
    } catch (e) {
      throw e;
      console.log(err)
    }
  };


  const onReadMoreClick = (postId: number) => {
    // setShowFullContent(postId);
    navigate(`/post/${postId}`)
  };

  const onMorePostsClick = () => {
    navigate("/posts");
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
          {posts.slice(0,3).map((post, id) => {
            const imageUrl = `http://localhost:8080/api/auth/image/${post.postImage}`;
            const truncatedContent =
            post.postContent.length > 100
              ? `${post.postContent.slice(0, 100)}...`
              : post.postContent;
        return (
          <div className="card" key={id}>
           <img src={imageUrl} alt="" className="card-image" />
            <div className="card-content">
              <div className='card-content-title'>
                <h1 className="card-title">{post.postTitle}</h1>
              </div>
              <hr className='line_post'/>
              <div className='text-body'>
                <p className="card-body">{showFullContent === id ? post.postContent : truncatedContent}</p>
              </div>
              <button
                    className="read-more-button"
                    onClick={() => onReadMoreClick(post.postId)}
                  >
                   Read More
                  </button>
            </div>
          </div>
        );
      })}
        </div>
        <button className="more-posts-button" onClick={onMorePostsClick}>
          MORE POSTS
        </button>
      </section>
    </div>
  );
};

export default Blog;
