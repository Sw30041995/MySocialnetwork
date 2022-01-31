import React from "react";
import style from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageType} from '../../redux/state';

type DialogsPropsType = {
    dialogsPage: DialogsPageType
}

export const Dialogs = (props: DialogsPropsType) => {

    let newMessageElement = React.createRef<HTMLTextAreaElement>()

    let sendMessage = () => {
        let newMessageText = newMessageElement.current?.value
        alert(newMessageText)
    }

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} avatarUrl={d.avatarUrl} name={d.name} id={d.id}/>);

    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id}/>);

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
                <textarea ref={newMessageElement}/>
                <button onClick={sendMessage}>Send a message</button>
            </div>
        </div>
    );
}