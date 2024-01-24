// PostDetail.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import TopNavigation from "./TopNavigation";
import MainNavigation from "./MainNavigation";

interface PostDetailProps {}

interface Post {
  postTitle: string;
  postContent: string;
  postImage: string;
}

const PostDetail: React.FC<PostDetailProps> = () => {
  const { id } = useParams<{ id: string }>(); // Fix the type declaration here
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/auth/post/${id}`);
        setPost(response.data);
      } catch (error) {
        // Handle error
        console.error(error);
      }
    };

    fetchPost();
  }, [id]);

  return (
    <div>
      
       <TopNavigation />
       {post && (
       <div className="body-container "  id='section-header'>
        <MainNavigation/>
        <div className='heading_read_more'>
            <h2>{post.postTitle}</h2>
        </div>
       <div className="content__read_more">
          <p>{post.postContent}</p>
       </div>         
          {/* <img src={`http://localhost:8080/api/auth/image/${post.postImage}`} alt="" /> */}
          
          </div>
      )}
    </div>
  );
};

export default PostDetail;
