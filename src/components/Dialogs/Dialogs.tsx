import React from "react";
import style from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

type PropsType = {
    message: string,
    likesCount: number,
}

export const Dialogs = () => {

    let dialogs = [
        {id: 1, name: 'Ivan'},
        {id: 2, name: 'Evgeniy'},
        {id: 3, name: 'Yaroslav'},
        {id: 4, name: 'Alexey'},
        {id: 5, name: 'Anastasiya'}
    ];

    let messages = [
        {message: 'Hello'},
        {message: 'I learn JS and React'},
        {message: 'i have good computer'},
        {message: 'bla bla'},
        {message: 'ho ho ho'}
    ];

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    let messagesElements = messages.map(m => <Message message={m.message}/>);

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
            </div>
        </div>
    );
}