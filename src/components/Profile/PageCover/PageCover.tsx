import style from "./PageCover.module.css";
import React from "react";

export const PageCover = () => {
    return (
        <div className={style.pageCover}>
            <img
                src="https://media-cdn.tripadvisor.com/media/photo-s/1b/69/5d/5a/tramonto-a-sangineto.jpg"
                alt=""/>
        </div>
    );
}
