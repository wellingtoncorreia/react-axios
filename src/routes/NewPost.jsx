import blogFetch from "../axios/config";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import '../styles/newPost.css'

const NewPost = () => {
  const usenavigate = useNavigate();

  const[title, setTitle] = useState();
  const[body, setBody] = useState();

  const createPost = async (e) =>{
    e.preventDefault();

    const post = {title, body, userId:1};

    await blogFetch.post("/posts", {
      body: post,
    })
    
  }

  return (
    <div className='new-post'>
      <h2>Inserir novos posts</h2>
      <form onSubmit={(e) => createPost(e)}>
        <div className="form-control">
          <label htmlFor="title">Título:</label>
          <input type="text" onChange={(e) => setTitle(e.target.value)} name="title" id="title" placeholder="Digite o título" />
        </div>
        <div className="form-control">
          <label htmlFor="body">body:</label>
          <textarea onChange={(e) => setBody(e.target.value)} name="body" id="body" placeholder="digite um conteúdo"></textarea>
        </div>
        <input type="submit" value="Criar Post" className="btn" />
      </form>
    </div>
  )
}

export default NewPost
