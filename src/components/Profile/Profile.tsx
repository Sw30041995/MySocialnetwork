import React from "react";
import style from './Profile.module.css';
import {Myposts} from "./Myposts/Myposts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PageCover} from "./PageCover/PageCover";

type PostType = {
    id: number
    message: string
    likesCount: number
}

type ProfilePageType = {
    posts: Array<PostType>
}

export const Profile = (props: Array<PostType>) => {
    return (
        <div>
            <PageCover/>
            <ProfileInfo/>
            <Myposts posts={props.posts}/>
        </div>
    );
}
