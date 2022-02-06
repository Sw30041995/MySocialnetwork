import React from "react";
import {addPostAC, changeNewPostTextAC} from "../../../redux/profile-reducer";
import {ReduxStoreType} from "../../../redux/redux-store";
import {MyPosts} from "./MyPosts";

type MyPostsContainerPropsType = {
    store: ReduxStoreType
}

export const MyPostsContainer = (props: MyPostsContainerPropsType) => {

    const state = props.store.getState()

    const onAddPost = () => props.store.dispatch(addPostAC())

    const onChangePostText = (newPostText: string) => {
        props.store.dispatch(changeNewPostTextAC(newPostText))
    }

    return (
        <MyPosts posts={state.profile.posts} newPostText={state.profile.newPostText} addPost={onAddPost}
                 changePostText={onChangePostText}/>
    )
}