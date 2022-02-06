import React from "react";
// import style from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PageCover} from "./PageCover/PageCover";
import {ReduxStoreType} from "../../redux/redux-store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {
    store: ReduxStoreType
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <PageCover/>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
        </div>
    )
}
