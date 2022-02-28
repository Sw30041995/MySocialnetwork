import {v1} from "uuid";
import dialogsReducer, {changeNewMessageTextAC, DialogsPageType, sendMessageAC} from "./dialogs-reducer";

test('message must be sent', () => {

    const initialState: DialogsPageType = {
        dialogs: [
            {
                id: v1(),
                avatarUrl: 'https://w1.pngwing.com/pngs/664/825/png-transparent-social-media-icons-avatar-male-man-female-face-facial-hair-facial-expression.png',
                name: 'Anastasiya'
            }
        ],
        messages: [
            {id: v1(), message: 'Hello'}
        ],
        newMessageText: ''
    }

    const newState = dialogsReducer(initialState, sendMessageAC())

    expect(newState.messages.length).toBe(2)
})

test('the text of the new message should be changed', () => {

    const initialState: DialogsPageType = {
        dialogs: [
            {
                id: v1(),
                avatarUrl: 'https://w1.pngwing.com/pngs/664/825/png-transparent-social-media-icons-avatar-male-man-female-face-facial-hair-facial-expression.png',
                name: 'Anastasiya'
            }
        ],
        messages: [
            {id: v1(), message: 'Hello'}
        ],
        newMessageText: ''
    }

    const newState = dialogsReducer(initialState, changeNewMessageTextAC('Hello'))

    expect(newState.newMessageText).toBe('Hello')
})