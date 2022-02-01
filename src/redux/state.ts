import {v1} from "uuid";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

export type PostType = {
    id: string
    message: string
    likesCount: number
}

type DialogType = {
    id: string
    avatarUrl: string
    name: string
}

export type MessageType = {
    id: string
    message: string
}

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
}

export type SidebarType = {
    friends: Array<DialogType>
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    _rerenderEntireTree: (state: RootStateType) => void
    subscribe: (observer: (state: RootStateType) => void) => void
    dispatch: (action: ActionType) => void
}

export type ActionType = AddPostActionType | ChangeNewPostTextType | SendMessageType | ChangeNewMessageTextType

export type AddPostActionType = {
    type: 'ADD-POST'
}
export type ChangeNewPostTextType = {
    type: 'CHANGE-NEW-POST-TEXT'
    newText: string
}
export type SendMessageType = {
    type: 'SEND-MESSAGE'
}
export type ChangeNewMessageTextType = {
    type: 'CHANGE-NEW-MESSAGE-TEXT'
    newMessageText: string
}

export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: v1(), message: 'Hello. My name Ivan.', likesCount: 13},
                {id: v1(), message: 'Goodbye', likesCount: 9},
                {id: v1(), message: 'heeey', likesCount: 7}
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
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
                },
                {
                    id: v1(),
                    avatarUrl: 'https://cdn.w600.comps.canstockphoto.ru/%D0%BA%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D1%8B%D0%B9-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80-%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D1%8B%D0%B9-%D0%BA%D0%BB%D0%B8%D0%BF%D0%B0%D1%80%D1%82_csp41056957.jpg',
                    name: 'Alexey'
                },
                {
                    id: v1(),
                    avatarUrl: 'https://w1.pngwing.com/pngs/664/825/png-transparent-social-media-icons-avatar-male-man-female-face-facial-hair-facial-expression.png',
                    name: 'Anastasiya'
                }
            ],
            messages: [
                {id: v1(), message: 'Hello'},
                {id: v1(), message: 'I learn JS and React'},
                {id: v1(), message: 'i have good computer'},
                {id: v1(), message: 'bla bla'},
                {id: v1(), message: 'ho ho ho'}
            ],
            newMessageText: ''
        },
        sidebar: {
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
    },
    _rerenderEntireTree(state) {
    },

    getState() {
        return this._state
    },
    subscribe(observer: (state: RootStateType) => void) {
        this._rerenderEntireTree = observer
    },

    dispatch(action: ActionType) {
        profileReducer(this._state.profilePage, action)
        dialogsReducer(this._state.dialogsPage, action)
        this._rerenderEntireTree(this._state)
    }
}

export const addPostActionCreator = (): AddPostActionType => ({type: "ADD-POST"})
export const changeNewPostTextActionCreator = (newText: string): ChangeNewPostTextType => ({
    type: "CHANGE-NEW-POST-TEXT",
    newText: newText
})
export const sendMessageActionCreator = (): SendMessageType => ({type: 'SEND-MESSAGE'})
export const changeNewMessageTextActionCreator = (newMessageText: string): ChangeNewMessageTextType => ({
    type: 'CHANGE-NEW-MESSAGE-TEXT',
    newMessageText: newMessageText
})