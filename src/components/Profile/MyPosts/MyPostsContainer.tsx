import React from "react";
import {addPostAC, changeNewPostTextAC, PostType} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {AppStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";

type MapStatePropsType = {
    posts: Array<PostType>
    newPostText: string
}

type mapDispatchPropsType = {
    addPost: () => void
    changePostText: (newPostText: string) => void
}

export type MyPostsPropsType = MapStatePropsType & mapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
    return {
        addPost: () => dispatch(addPostAC()),
        changePostText: (newPostText: string) => dispatch(changeNewPostTextAC(newPostText))
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)