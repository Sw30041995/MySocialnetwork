import React from "react";
import style from "./Myposts.module.css";
import {PostType} from "../../../redux/profile-reducer";
import {Post} from "./Post/Post";

type MypostsPropsType = {
    posts: Array<PostType>
    newPostText: string
    addPost: () => void
    changePostText: (newPostText: string) => void
}

export const MyPosts = (props: MypostsPropsType) => {

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => props.addPost

    const onChangePostTextHandler = () => {
        if (newPostElement.current) {
            props.changePostText(newPostElement.current.value)
        }
    }

    const postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={style.posts}>
            <h3>My posts</h3>
            <div className={style.newPost}>
                <textarea value={props.newPostText} onChange={onChangePostTextHandler} ref={newPostElement}
                          placeholder='tell us something interesting happened'/>
                <button onClick={addPost}>Send</button>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    )
}