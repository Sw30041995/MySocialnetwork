import {ActionType, DialogsPageType, MessageType} from "./state";
import {v1} from "uuid";

export const dialogsReducer = (state: DialogsPageType, action: ActionType) => {
    switch (action.type) {
        case 'SEND-MESSAGE':
            const newMessage: MessageType = {
                id: v1(),
                message: state.newMessageText
            }
            state.messages.push(newMessage)
            state.newMessageText = ''
            break;
        case 'CHANGE-NEW-MESSAGE-TEXT':
            state.newMessageText = action.newMessageText
            break;
    }
    return state
}