import React from "react";
import style from './Post.module.css';

type PropsType = {
    message: string
    likesCount: number
}

export const Post = (props: PropsType) => {
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
