import React, {ChangeEvent} from "react";
import style from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {
    ActionType,
    changeNewMessageTextActionCreator,
    DialogsPageType,
    sendMessageActionCreator
} from '../../redux/state';

type DialogsPropsType = {
    dialogsPage: DialogsPageType
    dispatch: (action: ActionType) => void
}

export const Dialogs = (props: DialogsPropsType) => {

    let sendMessage = () => props.dispatch(sendMessageActionCreator())

    const onChangeMessageTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(changeNewMessageTextActionCreator(e.currentTarget.value))
    }

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} avatarUrl={d.avatarUrl}
                                                                         name={d.name} id={d.id}/>)
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id}/>)

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
            </div>
            <div><textarea onChange={onChangeMessageTextHandler}
                           value={props.dialogsPage.newMessageText}/>
                <button onClick={sendMessage}>Send a message</button>
            </div>
        </div>
    )
}