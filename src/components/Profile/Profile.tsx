import React from "react";
import style from './Profile.module.css';
import {Myposts} from "./Myposts/Myposts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PageCover} from "./PageCover/PageCover";

let posts = [
    {id: 1, message: 'Hello. My name Ivan.', likesCount: 13},
    {id: 2, message: 'Goodbye', likesCount: 9},
    {id: 3, message: 'heeey', likesCount: 7}
];

export const Profile = () => {
    return (
        <div>
            <PageCover/>
            <ProfileInfo/>
            <Myposts posts={posts}/>
        </div>
    );
}
