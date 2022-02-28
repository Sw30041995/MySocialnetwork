import {v1} from "uuid";
import profileReducer, {addPostAC, changeNewPostTextAC, ProfilePageType} from "./profile-reducer";

test('post should be added', () => {

    const initialState: ProfilePageType = {
        posts: [
            {id: v1(), message: 'Hello. My name Ivan.', likesCount: 13},
            {id: v1(), message: 'Its okay', likesCount: 9},
            {id: v1(), message: 'heeey', likesCount: 7}
        ],
        newPostText: 'Hello'
    }

    const newState = profileReducer(initialState, addPostAC())

    expect(newState.posts.length).toBe(4)
})

test('the text of the new post should be changed', () => {

    const initialState: ProfilePageType = {
        posts: [
            {id: v1(), message: 'Hello. My name Ivan.', likesCount: 13},
            {id: v1(), message: 'Its okay', likesCount: 9},
            {id: v1(), message: 'heeey', likesCount: 7}
        ],
        newPostText: ''
    }

    const newState = profileReducer(initialState, changeNewPostTextAC('My name is Ivan'))

    expect(newState.newPostText).toBe('My name is Ivan')
})