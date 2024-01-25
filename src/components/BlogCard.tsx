import { useState, useEffect } from 'react';
import{Link, useNavigate} from 'react-router-dom'
import axios from 'axios';
interface Post {
  postTitle: string;
  postContent:string;
  postImage: string;
  postId :number;
}
export const BlogCard = () => {
  const [posts, setPosts] = useState<Array<Post>>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showFullContent, setShowFullContent] = useState<number | null>(null);
  const postsPerPage = 6;
  const [err, setError] = useState('');
  const navigate = useNavigate();
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
          borderStyle:'none',
          width:"53px",
          height:"39px"
        }}   
      >
        prev
      </button>
    );
  
    // Page Buttons
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
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
          borderStyle:'none'
        }}   
      >
        next
      </button>
    );
  
    return buttons;
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
    }
  };
  
  const deletePost = async (postId: Number) => {
    try {
      
  
      const response = await fetch(`http://localhost:8080/api/auth/${postId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer jwtCookie=${sessionStorage.getItem("token")}`
        },
      });
  
      if (response.status === 204) {
        console.log(`Post with ID ${postId} has been deleted.`);
        const updatedPosts = [...posts];
        setPosts(updatedPosts);
      } else {
        console.error('Error deleting the post.');
      }
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };
  


  return (
       
      <div className=""> 

        <div className='heading__button'>
        <p className='post-heading'>OUR STORIES</p>
          <button ><Link className="portal_create_btn" to={"/portal/createpost"}>CREATE POST</Link></button>
        </div>
      
          <section className="portal_blog_section">
          <div className="cards" >
          {posts
          .slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage)
          .map((post, id) => {
        const imageUrl = `http://localhost:8080/api/auth/image/${post.postImage}`;
        const truncatedContent =
        post.postContent.length > 100
          ? `${post.postContent.slice(0, 300)}...`
          : post.postContent;
          return(
            
              <div className="card" key={id}>
                <img src={imageUrl} className="portal-blog__pictures" ></img>
                  <div className="card-content">
                    <div className="card-content-title">
                    <h1 className="card-title">{post.postTitle}</h1>
                    </div>
                    <hr className='line_post'/>
                    <div className="text-body">
                      <p className="card-body">{showFullContent === id ? post.postContent : truncatedContent}</p>
                    </div>
                    <div className="action_button">
                    <button className="changes__buttton_edit"onClick={() => navigate("/portal/update", {
                        state: {
                          id:  post.postId,
                          title: post.postTitle,
                          description: post.postContent
                        },
                      })}>Edit</button>
                    <button className="changes__buttton_delete" onClick={() => deletePost(post.postId)}>Delete</button> 
                    </div>
                  </div>
         
              </div>
           
              )
            })}
            </div>
          </section>
          <div className="pagination-buttons">{renderPaginationButtons()}</div>
        </div>  
   );
};


 