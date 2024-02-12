import React, { useState } from 'react';

export const CreatePost = () => {
  const [postTitle, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [file, setFile] = useState('');


  const onSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const formData = new FormData();
      formData.append("title", postTitle);
      formData.append("content", content);
      formData.append("image", file);
  
      const response = await fetch(`http://localhost:8080/api/auth/post`, {
        method: 'POST',
        body: formData,
        headers: {
          'Authorization': `Bearer jwtCookie=${sessionStorage.getItem("token")}`
        }
      });
  
      if (!response.ok) {       
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      
      const responseData = await response.json();
  
      console.log("Server response:", responseData);
    } catch (error) {
      console.error("Fetch error", error);
    }
  };
  
  const handleImage = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };

  return (
    <>
    
    <div className='post-form'> 
    <h2 className='post-heading'>CREATE POST</h2>
    <div className='post-wrapper'>
      <form onSubmit={onSubmit}>
          <input className ="form-control" type="text" placeholder="post title" required onChange={(e) => setTitle(e.target.value)} />
          <textarea className ="form-group" rows={20} cols={100} placeholder="post content" required onChange={(e) => setContent(e.target.value)} />
          <input className ="form-control" type="text" placeholder="post category" required />
          <input  className = "" type="file" placeholder="post tag /category" onChange={handleImage} />
          <button type="submit">Submit</button>
        </form>
    </div>
      
    </div>
    </>
  );
};
