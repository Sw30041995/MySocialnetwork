import React, {FC} from "react";
import style from './Post.module.css';

type ProfilePageType = {
    posts: Array<PostsType>
}
type PostsType = {
    id: number
    message: string,
    likesCount: number
}

export const Post: React.FC<ProfilePageType> = (props) => {
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
