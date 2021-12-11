export type PostType = {
    id: number
    message: string
    likesCount: number
}

type DialogType = {
    id: number
    name: string
}

type MessageType = {
    id: number
    message: string
}

export type ProfilePageType = {
    posts: Array<PostType>
}

export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hello. My name Ivan.', likesCount: 13},
            {id: 2, message: 'Goodbye', likesCount: 9},
            {id: 3, message: 'heeey', likesCount: 7}
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Ivan'},
            {id: 2, name: 'Evgeniy'},
            {id: 3, name: 'Yaroslav'},
            {id: 4, name: 'Alexey'},
            {id: 5, name: 'Anastasiya'}
        ],
        messages: [
            {id: 1, message: 'Hello'},
            {id: 2, message: 'I learn JS and React'},
            {id: 3, message: 'i have good computer'},
            {id: 4, message: 'bla bla'},
            {id: 5, message: 'ho ho ho'}
        ]
    }
}

export default state;