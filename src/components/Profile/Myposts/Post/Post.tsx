import React from "react";
import style from './Post.module.css';

export const Post = (props) => {
    return (
        <div className={style.postItem}>
            <img
                src="https://www.publicdomainpictures.net/pictures/270000/nahled/avatar-people-person-business-.jpg"
                alt=""/>
            {props.message}
            <div>
                likes {props.likesCount}
            </div>
        </div>
    );
}
