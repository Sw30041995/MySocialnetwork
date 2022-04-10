import style from "./ProfileInfo.module.css";
import React from "react";
import {ProfilePageType} from "../../../redux/profile-reducer";

type PropsType = {
    profile: ProfilePageType
}
export const ProfileInfo = (props: PropsType) => {
    console.log(props)

    return (
        <div className={style.profileInfo}>
            <div>
                <h4>{props.profile.profile?.fullName}</h4>
                <img
                    src={props.profile.profile?.photos.large}
                    alt="My photo"/>
            </div>
            <div className={style.description}>
                <p>Контакты: </p>
                <p>Facebook: {props.profile.profile?.contacts.facebook}</p>
                <p>Vk: {props.profile.profile?.contacts.vk}</p>
                <p>Instagram: {props.profile.profile?.contacts.instagram}</p>
                <p>Обо мне: {props.profile.profile?.aboutMe}</p>
                <p>В поиске работы: {props.profile.profile?.lookingForAJob ? 'Да' : 'Нет'}</p>
            </div>
        </div>
    );
}