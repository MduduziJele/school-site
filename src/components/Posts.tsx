import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import TopNavigation from './TopNavigation';
import MainNavigation from './MainNavigation';

interface Post {
  postTitle: string;
  postContent: string;
  truncatedContent: string; // New property for truncated content
  postImage: string;
}

const Posts: React.FC = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<Array<Post>>([]);
  const [err, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const [showFullContent, setShowFullContent] = useState<number | null>(null);

  const fetchPosts = () => {
    getPosts()
      .then((res) => {
        setPosts(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        setError(err.response.data.message);
      });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const getPosts = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/auth/all/post');
      const postsWithImages = response.data.map((post) => {
        const imageFileName = post.imageFileName;
        const truncatedContent = post.postContent.slice(0, 100); // Adjust the length as needed
        return { ...post, imageFileName, truncatedContent };
      });
      setPosts(postsWithImages);
    } catch (e) {
      setError(e.response.data.message);
    }
  };

  const onReadMoreClick = (postId: number) => {
    navigate(`/post/${postId}`);
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const renderPaginationButtons = () => {
    const totalPages = Math.ceil(posts.length / postsPerPage);
    const buttons = [];

    // Previous Button
    buttons.push(
      <button
        key="prev"
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
        style={{
          backgroundColor: '#743943',
          fontWeight: '400',
          fontSize: '16px',
          lineHeight: '19.36px',
          color: '#ffffff',
          borderStyle: 'none',
          width: '53px',
          height: '39px',
        }}
      >
        Prev
      </button>
    );

    // Page Buttons
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => paginate(i)}
          style={{
            backgroundColor: i === currentPage ? '#743943' : '#ffffff',
            fontWeight: i === currentPage ? '400' : 'normal',
            fontSize: i === currentPage ? '16px' : '14px',
            lineHeight: i === currentPage ? '19.36px' : 'normal',
            color: i === currentPage ? '#ffffff' : '#333333',
            borderStyle: 'none',
          }}
        >
          {i}
        </button>
      );
    }

    // Next Button
    buttons.push(
      <button
        key="next"
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={currentPage === totalPages}
        style={{
          backgroundColor: '#743943',
          fontWeight: '400',
          fontSize: '16px',
          lineHeight: '19.36px',
          color: '#ffffff',
          borderStyle: 'none',
        }}
      >
        Next
      </button>
    );

    return buttons;
  };

  return (
    <div>
      <TopNavigation />
      <div className="body-container " id="section-header">
        <MainNavigation />
        <div className="heading__blog">
          <h2>Our Stories</h2>
        </div>
      </div>

      <section className="blog-section">
        <div className="cards">
          {currentPosts.map((post, id) => {
            const imageUrl = `http://localhost:8080/api/auth/image/${post.postImage}`;
            const truncatedContent =
              post.postContent.length > 100
                ? `${post.postContent.slice(0, 100)}...`
                : post.postContent;
            return (
              <div className="card" key={id}>
                <img src={imageUrl} alt="" className="card-image" />
                <div className="card-content">
                  <div className="card-content-title">
                    <h1 className="card-title">{post.postTitle}</h1>
                  </div>
                  <hr className="line_post" />
                  <div className="text-body">
                    <p className="card-body">
                      {showFullContent === id ? post.postContent : truncatedContent}
                    </p>
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
        <div className="pagination-buttons">{renderPaginationButtons()}</div>
      </section>
    </div>
  );
};

export default Posts;
