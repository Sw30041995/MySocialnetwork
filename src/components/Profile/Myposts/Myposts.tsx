import React from "react";
import style from "./Myposts.module.css";
import {Post} from "./Post/Post";

type ProfilePageType = {
    posts: Array<PostsType>
}
type PostsType = {
    id: number
    message: string,
    likesCount: number
}

export const Myposts: React.FC<ProfilePageType> = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    return (
        <div className={style.posts}>
            <h3>My posts</h3>
            <div className={style.newPost}>
                <textarea placeholder='tell us something interesting happened'></textarea>
                <button>Send</button>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    );
}