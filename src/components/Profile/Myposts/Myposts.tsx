import React from "react";
import style from "./Myposts.module.css";
import {Post} from "./Post/Post";
import {PostType} from './../../../redux/state';

type MypostsPropsType = {
    posts: Array<PostType>
}

export const Myposts = (props: MypostsPropsType) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        let text = newPostElement.current?.value;
        alert(text)
    }

    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>);

    return (
        <div className={style.posts}>
            <h3>My posts</h3>
            <div className={style.newPost}>
                <textarea ref={newPostElement} placeholder='tell us something interesting happened'></textarea>
                <button onClick={addPost}>Send</button>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    );
}