import React from "react";
import style from './Profile.module.css';
import {Myposts} from "./Myposts/Myposts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PageCover} from "./PageCover/PageCover";

export const Profile = () => {
    return (
        <div>
            <PageCover/>
            <ProfileInfo/>
            <Myposts/>
        </div>
    );
}
