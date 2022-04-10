import React, {ChangeEvent} from "react";
import style from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {changeNewMessageTextAC, DialogsPageType, sendMessageAC} from "../../redux/dialogs-reducer";

export const Dialogs = () => {

    const dispatch = useDispatch()
    const dialogsPage = useSelector<AppStateType, DialogsPageType>(state => state.dialogsPage)

    const sendMessage = () => {
        dispatch(sendMessageAC())
    }

    const onChangeMessageTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(changeNewMessageTextAC(e.currentTarget.value))
    }

    const dialogsElements = dialogsPage.dialogs.map(d => <DialogItem key={d.id} avatarUrl={d.avatarUrl}
                                                                           name={d.name} id={d.id}/>)
    const messagesElements = dialogsPage.messages.map(m => <Message message={m.message} key={m.id}/>)

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea value={dialogsPage.newMessageText}
                          onChange={onChangeMessageTextHandler}/>
                <button onClick={sendMessage}>Send a message</button>
            </div>
        </div>
    )
}