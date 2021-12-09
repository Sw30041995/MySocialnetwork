import style from "./ProfileInfo.module.css";
import React from "react";

export const ProfileInfo = () => {
    return (
        <div className={style.profileInfo}>
            <img
                src="https://www.publicdomainpictures.net/pictures/270000/nahled/avatar-people-person-business-.jpg"
                alt=""/>
            profile info
        </div>
    );
}