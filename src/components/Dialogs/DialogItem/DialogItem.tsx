import style from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type PropsType = {
    name: string
    id: number
}

export const DialogItem = (props: PropsType) => {
    return (
        <div className={style.item}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    );
}