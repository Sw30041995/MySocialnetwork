import {v1} from "uuid";
import {ActionType} from "./redux-store";

export type SendMessageActionType = {
    type: "SEND-MESSAGE"
}
export type ChangeNewMessageTextType = {
    type: 'CHANGE-NEW-MESSAGE-TEXT'
    newMessageText: string
}

export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
}

export type DialogType = {
    id: string
    avatarUrl: string
    name: string
}

type MessageType = {
    id: string
    message: string
}

const initialState: DialogsPageType = {
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
}

const dialogsReducer = (state: DialogsPageType = initialState, action: ActionType): DialogsPageType => {
    switch (action.type) {
        case 'SEND-MESSAGE':
            const newMessage: MessageType = {
                id: v1(),
                message: state.newMessageText
            }
            state.messages.push(newMessage)
            state.newMessageText = ''
            return state
        case 'CHANGE-NEW-MESSAGE-TEXT':
            state.newMessageText = action.newMessageText
            return state
        default:
            return state
    }
    return state
}

export const sendMessageAC = (): SendMessageActionType => ({type: 'SEND-MESSAGE'})
export const changeNewMessageTextAC = (newMessageText: string): ChangeNewMessageTextType => ({
    type: "CHANGE-NEW-MESSAGE-TEXT",
    newMessageText: newMessageText
})

export default dialogsReducer