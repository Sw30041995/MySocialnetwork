import React from "react";
import style from './Friends.module.css';

type PropsType = {
    avatarUrl: string
    name: string
}

export const Friends = (props: PropsType) => {
    return (
        <div className={style.friend}>
            <img src={props.avatarUrl} alt=""/>
            {props.name}
        </div>
    )
}