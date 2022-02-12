//import { paste } from "@testing-library/user-event/dist/paste";
//import ClassCounter from "./Components/ClassCounter";
//import Counter from "./Components/Counter";
//import PostItem from "./Components/PostItem";
import React, { useState, useRef } from "react";
import PostList from "./Components/PostsList";
import InputButton from "./Components/UI/Button/InputButton";
import PostInput from "./Components/UI/Input/PostInput";
import "./styles/app.css";


function App() {
  const [posts, setPosts] = useState( [
    {id:1, title:"JavaScript_1_", body:"JavaScript is programming laenguage"},
    {id:2, title:"JavaScript_2_", body:"JavaScript is programming laenguage"},
    {id:3, title:"JavaScript_3_", body:"JavaScript is programming laenguage"}])

    const [title, setTitle] = useState("")

    const BodyInputRef = useRef()

    const addNewPost = (e)=> {  
      //Нужно чтобы сайт не перезагружался, таккак у кнопки автоматически установлен режим перезагрузки страницы
      e.preventDefault()
      
      
      console.log(title)
      console.log(BodyInputRef.current.value)

      const body = BodyInputRef.current.value

      const newPost = 
      {
        id: Date.now(),
        title,
        body,
      }

      console.log(newPost)

      setPosts([...posts, newPost])

      //Очистка полей после создания
      BodyInputRef.current.value = ""
      setTitle("")  
    }


  return (
    <div className="App">

        <form>
          {/*Управляймый жлемент через SetTitke*/}
          <PostInput 
          type="text" 
          placeholder="Post title"
          value={title}
          onChange={value => setTitle(value.target.value)}
          />
          {/* Неуправляймый элемент через ref и оборачивание компонента в React.forwardRef*/}
          <PostInput 
          ref={BodyInputRef}
          type="text" 
          placeholder="Post description"/>
          <InputButton onClick={addNewPost}>Create new post</InputButton>
        </form>

      <PostList posts = {posts} title = "Posts List (JavaScript)"/>

      {/* <PostItem post = {}/> */}
      {/* <Counter/> <ClassCounter/> Использовать классы - устарвевший подход  */}

    </div>
  );
}

export default App;
