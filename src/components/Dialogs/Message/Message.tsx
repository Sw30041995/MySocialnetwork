import style from "./Message.module.css";
import React from "react";

export const Message = () => {
    return (
        <div className={style.message}>
            {props.message}
        </div>
    );
}