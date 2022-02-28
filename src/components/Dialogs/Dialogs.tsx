import React, {ChangeEvent} from "react";
import style from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";

export const Dialogs = (props: DialogsPropsType) => {

    const sendMessage = () => props.sendMessage()

    const onChangeMessageTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeMessageText(e.currentTarget.value)
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
                <textarea value={props.dialogsPage.newMessageText}
                          onChange={onChangeMessageTextHandler}/>
                <button onClick={sendMessage}>Send a message</button>
            </div>
        </div>
    )
}