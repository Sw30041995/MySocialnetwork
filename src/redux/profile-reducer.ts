import {v1} from "uuid";
import {ActionType} from "./redux-store";

export type AddPostActionType = {
    type: 'ADD-POST'
}
export type ChangeNewPostTextType = {
    type: 'CHANGE-NEW-POST-TEXT'
    newPostText: string
}

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

export type PostType = {
    id: string
    message: string
    likesCount: number
}

const initialState: ProfilePageType = {
    posts: [
        {id: v1(), message: 'Hello. My name Ivan.', likesCount: 13},
        {id: v1(), message: 'Its okay', likesCount: 9},
        {id: v1(), message: 'heeey', likesCount: 7}
    ],
    newPostText: ''
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionType): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostType = {
                id: v1(),
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.unshift(newPost)
            state.newPostText = ''
            return state
        case 'CHANGE-NEW-POST-TEXT':
            state.newPostText = action.newPostText
            return state
        default:
            return state
    }
}

export const addPostAC = (): AddPostActionType => ({type: "ADD-POST"})
export const changeNewPostTextAC = (newPostText: string): ChangeNewPostTextType => ({
    type: "CHANGE-NEW-POST-TEXT",
    newPostText: newPostText
})

export default profileReducer