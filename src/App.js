import axios from "axios";
import React, { useState, useEffect, useMemo} from "react";
import PostService from "./API/PostService";
import CreatePostForm from "./Components/CreatePostForm";
import PostCreateWindow from "./Components/PostCreateModalWindow/PostCreateWindow";
import PostsFilter from "./Components/PostsFilter";
import PostList from "./Components/PostsList";
import InputButton from "./Components/UI/Button/InputButton";
import Loader from "./Components/UI/Loader/loader";
import useFatching from "./Hooks/useFatching";
import { usePosts } from "./Hooks/usePosts";
import "./styles/app.css";
import { getPageCount, UsePageList} from "./Utils/Pages";
import PagesNavigation from "./Components/UI/Pagination/Pagination";

const App = () => 
{
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort:"", query:""})
  const [VisibleCreatePost, setVisibleCreatepost] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
 
  const [totalPages, setTotalPages] = useState(0)

  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  
 

  const [fetchPost, isPostLoading, postError] = useFatching(async (limit, page) =>{
    const responce = await PostService.GetAll(limit, page)
    setPosts(responce.data)
    const totalCount = responce.headers["x-total-count"]
    setTotalPages(getPageCount(totalCount, limit))
  })

  useEffect( () => {
    fetchPost(limit, page)
  }, [])

  const addNewPost = (post) => {
    setPosts([...posts, {...post, id: Date.now()}])
    setVisibleCreatepost(false)
  }
  const deletePost = (post) => setPosts(posts.filter((tempPost) => tempPost.id !== post.id))

  const changePage = (page) =>{
    setPage(page)
    fetchPost(limit, page)
  }

  return (
    <div className="App">
      <InputButton style = {{marginTop: 30}} onClick={()=>setVisibleCreatepost(true)}> Create Post </InputButton>

      <PostCreateWindow visible ={VisibleCreatePost} setVisible ={setVisibleCreatepost}> <CreatePostForm addNewPost={addNewPost}/> </PostCreateWindow>

      <hr className="Separator"/>

      <PostsFilter filter={filter} setFilter={setFilter}/>
      
      {postError && <h1> Error! ${postError} </h1>}

      {isPostLoading ? <div className="LoaderPosition"><Loader/></div> 
      : <PostList posts = {sortedAndSearchedPosts} title = "Posts List (JavaScript)" remove={deletePost}/>}

      <PagesNavigation currentPage={page} changePage={changePage} totalPages={totalPages}/>
    </div>
  );
}

export default App;
