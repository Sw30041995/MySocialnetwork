import style from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type PropsType = {
    name: string
    avatarUrl: string
    id: string
}

export const DialogItem = (props: PropsType) => {
    return (
        <div className={style.item}>
            <img src={props.avatarUrl} alt=""/>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    );
}