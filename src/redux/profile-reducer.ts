import {v1} from "uuid";

export type ActionType =
    AddPostActionType | ChangeNewPostTextActionType | SetUserProfileActionType


export type AddPostActionType = {
    type: 'ADD-POST'
}
export type ChangeNewPostTextActionType = {
    type: 'CHANGE-NEW-POST-TEXT'
    newPostText: string
}
export type SetUserProfileActionType = {
    type: 'SET-USER-PROFILE'
    profile: ProfileType
}

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
    profile: ProfileType | null
}

export type PostType = {
    id: string
    message: string
    likesCount: number
}
export type ProfileType = {
    aboutMe: string
    userId: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: {
        small: string
        large: string
    }
}

const initialState: ProfilePageType = {
    posts: [
        {id: v1(), message: 'Hello. My name Ivan.', likesCount: 13},
        {id: v1(), message: 'Its okay', likesCount: 9},
        {id: v1(), message: 'heeey', likesCount: 7}
    ],
    newPostText: '',
    profile: {
        aboutMe: '',
        userId: '',
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        contacts: {
            github: '',
            vk: '',
            facebook: '',
            instagram: '',
            twitter: '',
            website: '',
            youtube: '',
            mainLink: ''
        },
        photos: {
            small: '',
            large: ''
        }
    }
}


export const profileReducer = (state: ProfilePageType = initialState, action: ActionType): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST':
            return {
                ...state,
                posts: [{id: v1(), message: state.newPostText, likesCount: 0}, ...state.posts],
                newPostText: ''
            }
        case 'CHANGE-NEW-POST-TEXT':
            return {...state, newPostText: action.newPostText}
        case "SET-USER-PROFILE":
            return {...state, profile: action.profile}
        default:
            return state
    }
}

export const addPost = (): AddPostActionType => ({type: "ADD-POST"})
export const changeNewPostText = (newPostText: string): ChangeNewPostTextActionType => ({
    type: "CHANGE-NEW-POST-TEXT",
    newPostText: newPostText
})
export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({
    type: "SET-USER-PROFILE",
    profile
})
