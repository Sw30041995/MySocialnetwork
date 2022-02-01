import {ActionType, PostType, ProfilePageType} from "./state";
import {v1} from "uuid";

const profileReducer = (state: ProfilePageType, action: ActionType) => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostType = {id: v1(), message: state.newPostText, likesCount: 0}
            state.posts.unshift(newPost)
            state.newPostText = ''
            break;
        case 'CHANGE-NEW-POST-TEXT':
            state.newPostText = action.newText
            break;
    }
    return state
}

export default profileReducer