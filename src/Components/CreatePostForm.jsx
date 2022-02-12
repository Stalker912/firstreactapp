import React, { useState } from "react";
import InputButton from "./UI/Button/InputButton";
import PostInput from "./UI/Input/PostInput";

const CreatePostForm = ({addNewPost}) =>
{
    const [post, setPost] = useState({title:"", body:""})

    const CreateNewPost = (e)=> {  
        //Нужно чтобы сайт не перезагружался, таккак у кнопки автоматически установлен режим перезагрузки страницы
        e.preventDefault()
        addNewPost(post)
        //Очистка полей после создания
        setPost({title:"", body:""})
    }

    return(
    <form>
        <PostInput 
        type="text" 
        placeholder="Post title"
        value={post.title}
        onChange={title => setPost({...post, title: title.target.value})}
        />

        <PostInput 
        type="text" 
        placeholder="Post description"
        value={post.body}
        onChange={body =>setPost({...post, body: body.target.value})}
        />

        <InputButton onClick={CreateNewPost}>Create new post</InputButton>
    </form>)
}

export default CreatePostForm