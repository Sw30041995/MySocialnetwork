import {v1} from "uuid";
import {DialogType} from "./dialogs-reducer";

export type ActionType = {

}

export type SidebarType = {
    friends: Array<DialogType>
}

const initialState: SidebarType = {
    friends: [
        {
            id: v1(),
            avatarUrl: 'https://rlab.me/wp-content/uploads/2017/09/sozdat-avatar-dlya-youtube-sharg.png',
            name: 'Ivan'
        },
        {
            id: v1(),
            avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYIMmE0bLUSDD7LII20c-b06qmFH_ZWUqUQA&usqp=CAU',
            name: 'Evgeniy'
        },
        {
            id: v1(),
            avatarUrl: 'https://image.freepik.com/free-vector/man-avatar-portrait-of-a-man-minimalist-flat-illustration_186332-435.jpg',
            name: 'Yaroslav'
        }
    ]
}

export const sidebarReducer = (state: SidebarType = initialState, action: ActionType): SidebarType => {
    return state
}