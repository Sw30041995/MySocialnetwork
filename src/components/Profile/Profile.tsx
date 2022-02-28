import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PageCover} from "./PageCover/PageCover";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

export const Profile = () => {
    return (
        <div>
            <PageCover/>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )
}
