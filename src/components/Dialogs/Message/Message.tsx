import style from "./Message.module.css";
import React from "react";

type PropsType = {
    message: string
}

export const Message = (props: PropsType) => {
    return (
        <div className={style.message}>
            {props.message}
        </div>
    );
}