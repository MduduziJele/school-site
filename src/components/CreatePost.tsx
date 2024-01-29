// @ts-nocheck
import { useState } from 'react';

export const CreatePost = () => {
  const {addPost} = useAddBlog();

  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  // const [postTitle, setPostTitle] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    addPost({  postTitle : "sasd",postBody: "ada",
    postTag: "sas"   })
  }
    return (
        <>
        <form onSubmit={onSubmit}>                
                <input type="text" placeholder="post title" required onChange={(e) => {setPostTitle(e.target.value)}} ></input>
                <textarea rows = {32} cols = {100}  placeholder="post Body" required onChange={(e) => {setPostBody(e.target.value)}}/>
                <input type="text" placeholder="post tag /category"></input>
                <button>Submit</button>
            </form>
            
            
       
        
        </>
    )
}