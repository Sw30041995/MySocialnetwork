import React, {ChangeEvent, KeyboardEvent} from "react";
import style from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {changeNewMessageTextAC, DialogsPageType, sendMessageAC} from '../../redux/dialogs-reducer';
import {ActionType} from "../../redux/redux-store";

type DialogsPropsType = {
    dialogsPage: DialogsPageType
    dispatch: (action: ActionType) => void
}

export const Dialogs = (props: DialogsPropsType) => {

    const sendMessage = () => props.dispatch(sendMessageAC())

    const onChangeMessageTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(changeNewMessageTextAC(e.currentTarget.value))
    }

    const onKeyEnterHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.ctrlKey && e.code === 'Enter') {
            sendMessage()
        }
    }

    const dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} avatarUrl={d.avatarUrl}
                                                                           name={d.name} id={d.id}/>)

    const messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id}/>)

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea value={props.dialogsPage.newMessageText} onKeyPress={onKeyEnterHandler}
                          onChange={onChangeMessageTextHandler}/>
                <button onClick={sendMessage}>Send a message</button>
            </div>
        </div>
    )
}