import React, {useEffect} from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PageCover} from "./PageCover/PageCover";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfilePageType, setUserProfile} from "../../redux/profile-reducer";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {useMatch} from "react-router-dom";

export const Profile = () => {

    const dispatch = useDispatch()
    const profile = useSelector<AppStateType, ProfilePageType>(state => state.profilePage)

    let match = useMatch("/profile/:userId/");
    let userId = match ? match.params.userId : '2';

    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(res => {
                dispatch(setUserProfile(res.data))
            })
    }, [dispatch])

    return (
        <div>
            <PageCover/>
            <ProfileInfo profile={profile}/>
            <MyPostsContainer/>
        </div>
    )
}
