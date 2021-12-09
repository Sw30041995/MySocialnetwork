import React from "react";
import style from "./Myposts.module.css";
import {Post} from "./Post/Post";

let posts = [
    {id: 1, message: 'Hello. My name Ivan.', likesCount: 13},
    {id: 2, message: 'Goodbye', likesCount: 9},
    {id: 3, message: 'heeey', likesCount: 7}
];

export const Myposts = () => {
    let postsElements = posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>);

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