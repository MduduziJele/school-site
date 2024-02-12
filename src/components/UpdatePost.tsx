import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

interface MyPostProps {}

interface Post {
  title: string;
  content: string;
}

export const UpdatePost = () => {
    const location = useLocation();
    const { state } = location;
  
    const {id, title, description} = state;
    const [sTitle, setStitle] = useState<string>(title);
    const [sDescription, setSDescription] = useState<string>(description);
    const [file, setFile] = useState<File | null>(null);
  
    const navigate = useNavigate();
    const handlePostData = async (e) => {
      e.preventDefault();
    
      const formData = new FormData();
      formData.append("title", sTitle);
      formData.append("content", sDescription);
      formData.append("image", file || "");
    
      try {
        const response = await fetch(`http://localhost:8080/api/auth/${id}`, {
          method: "PUT",
          body: formData,
          headers: {
            'Authorization': `Bearer jwtCookie=${sessionStorage.getItem("token")}`
          },
        });
    
        if (response.ok) {
          // Check if response has a 'data' property
          const data = await response.json();
          if (data && data.data) {
            console.log("Server response:", data.data);
          } else {
            console.error("Server response is missing 'data' property");
          }
        } else {
          throw new Error("Network response was not ok");
        }
      } catch (error) {
        console.error("Fetch error", error);
      }
    
      console.log("Data posted successfully!");
      setStitle("");
      setSDescription("");
      navigate("/portal/blog");
    };
    
    
      const handleImageChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
      };
    
      return (
        <>
          <div className="post-form">
            <h1 className='post-heading'>Update Post</h1>
            <div className='post-wrapper'>
            <form>
             
                <input
                  type="text"
                  className="form-control"
                  placeholder="Title"
                  value={sTitle}
                  onChange={(e) => setStitle(e.target.value)}
                />
              
              
                <textarea
                  placeholder="Message"
                  className="form-group"
                  value={sDescription}
                  rows={20} cols={100}
                  onChange={(e) => setSDescription(e.target.value)}
                ></textarea>
             
             <input className ="form-control" type="text" placeholder="post category" required />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
                
        
              <button onClick={(e) => handlePostData(e)}>Submit</button>
            </form>
            </div>           
          </div>
        </>
      );
};
