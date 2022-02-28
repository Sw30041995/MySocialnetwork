import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import styles from './Users.module.css'
import axios from "axios";
import userPhoto from '../../photos/user.png'

export const Users = (props: UsersPropsType) => {

    if (props.users.length === 0) {
        axios
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                props.setUsers(response.data.items)
            })
    }

    return (
        <>
            {props.users.map(u => {

                const subscribe = () => {
                    props.subscribe(u.id)
                }

                const unSubscribe = () => {
                    props.unSubscribe(u.id)
                }

                return <div className={styles.container} key={u.id}>
                    <div>
                        <div><img className={styles.avatar} src={u.photos.small ? u.photos.small : userPhoto}/></div>
                        <div>
                            <button
                                onClick={u.followed ? unSubscribe : subscribe}>{u.followed ? 'Unfollow' : 'Follow'}</button>
                        </div>
                    </div>
                    <div className={styles.data}>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                        <div>{'u.location.country'}, {'u.location.city'}</div>
                    </div>
                </div>
            })}
            <button>Show More</button>
        </>
    )
}