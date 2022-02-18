import React, { useState, useMemo} from "react";
import CreatePostForm from "./Components/CreatePostForm";
import PostCreateWindow from "./Components/PostCreateModalWindow/PostCreateWindow";
import PostsFilter from "./Components/PostsFilter";
import PostList from "./Components/PostsList";
import InputButton from "./Components/UI/Button/InputButton";
import "./styles/app.css";

const App = () => 
{
  const [posts, setPosts] = useState( [
  {id:1, title:"JavaScript_3_", body:"JavaScript is programming laenguage1"},
  {id:2, title:"JavaScript_112_", body:"JavaScript is programming laenguage3"},
  {id:3, title:"JavaScript_2_", body:"JavaScript is programming laenguage2"}])

  const [filter, setFilter] = useState({sort:"", query:""})
  const [VisibleCreatePost, setVisibleCreatepost] = useState(false)


  const GetSortedPosts = () =>
  {
    if(filter.sort) return [...posts].sort((a,b) => a[filter.sort].localeCompare(b[filter.sort]))
    else return posts
  }
  const sortedPosts = useMemo(GetSortedPosts, [filter.sort, posts])

  const getSortedAndSearchedPosts = () =>
  {
    if(filter.query) return [...sortedPosts].filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase())
                                                  || post.body.toLowerCase().includes(filter.query.toLowerCase()))
    else return sortedPosts
  }

  const sortedAndSearchedPosts = useMemo(getSortedAndSearchedPosts, [filter.query, sortedPosts])

  const addNewPost = (post) => 
  {
    setPosts([...posts, {...post, id: Date.now()}])
    setVisibleCreatepost(false)
  }
  const deletePost = (post) => setPosts(posts.filter((tempPost) => tempPost.id !== post.id))

  return (
    <div className="App">
      <InputButton style = {{marginTop: 30}}onClick={()=>setVisibleCreatepost(true)}> Create Post </InputButton>
      

      <PostCreateWindow visible ={VisibleCreatePost} setVisible ={setVisibleCreatepost}> <CreatePostForm addNewPost={addNewPost}/> </PostCreateWindow>

      <hr className="Separator"/>

      <PostsFilter filter={filter} setFilter={setFilter}/>
  
      <PostList posts = {sortedAndSearchedPosts} title = "Posts List (JavaScript)" deletePost={deletePost}/>
    
    </div>
  );
}

export default App;
