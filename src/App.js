import React, { useState, useRef } from "react";
import CreatePostForm from "./Components/CreatePostForm";
import PostList from "./Components/PostsList";
import "./styles/app.css";


function App() {
  const [posts, setPosts] = useState( [
    {id:1, title:"JavaScript_1_", body:"JavaScript is programming laenguage"},
    {id:2, title:"JavaScript_2_", body:"JavaScript is programming laenguage"},
    {id:3, title:"JavaScript_3_", body:"JavaScript is programming laenguage"}])

    const addNewPost = (post) => setPosts([...posts, {...post, id: Date.now()}])

  return (
    <div className="App">
      <CreatePostForm addNewPost={addNewPost}/>
      <PostList posts = {posts} title = "Posts List (JavaScript)"/>
    </div>
  );
}

export default App;
