import React from "react";
// import style from './Profile.module.css';
import {Myposts} from "./Myposts/Myposts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PageCover} from "./PageCover/PageCover";
import {ActionType, ProfilePageType} from '../../redux/state';

type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionType) => void
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <PageCover/>
            <ProfileInfo/>
            <Myposts posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     dispatch={props.dispatch}/>
        </div>
    );
}
