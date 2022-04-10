import React, {useEffect} from 'react';
import styles from "./Users.module.css";
import userPhoto from "../../photos/user.png";
import {
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    subscribeAC,
    toggleLoading,
    unSubscribeAC,
    UsersPageType
} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import axios from "axios";
import {Preloader} from "../common components/Preloader";

export const Users = () => {

    const dispatch = useDispatch()
    const usersPage = useSelector<AppStateType, UsersPageType>(state => state.usersPage)

    useEffect(() => {
        dispatch(toggleLoading(true))
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${usersPage.totalUsersCount}&count=${usersPage.pageSize}`)
            .then(res => {
                dispatch(toggleLoading(false))
                dispatch(setTotalUsersCount(res.data.totalCount))
                dispatch(setUsers(res.data.items))
            })
    }, [dispatch, usersPage.totalUsersCount, usersPage.pageSize])

    useEffect(() => {
        dispatch(toggleLoading(true))
        dispatch(setCurrentPage(usersPage.currentPage))
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${usersPage.currentPage}&count=${usersPage.pageSize}`)
            .then(res => {
                dispatch(setUsers(res.data.items))
                dispatch(toggleLoading(false))
            })
    }, [dispatch, usersPage.currentPage, usersPage.pageSize])

    const pagesCount = Math.ceil(usersPage.totalUsersCount / usersPage.pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const subscribe = (id: number) => {
        dispatch(subscribeAC(id))
    }

    const unSubscribe = (id: number) => {
        dispatch(unSubscribeAC(id))
    }

    const onPageChanged = (page: number) => {
        dispatch(setCurrentPage(page))
    }

    return (
        usersPage.loading ? <Preloader/> :
            <>
                <div>{pages.map((p, i) => <span key={i} onClick={() => (onPageChanged(p))}
                                                className={usersPage.currentPage === p ? styles.currentPage : ''}>{p} </span>)}</div>

                {usersPage.users.map(u => {

                    return <div key={u.id} className={styles.container}>
                        <div>
                            <div>
                                <NavLink to={'/profile/' + u.id}>
                                    <img className={styles.avatar} src={u.photos.small ? u.photos.small : userPhoto}
                                         alt=''/>
                                </NavLink>
                            </div>
                            <div>
                                <button
                                    onClick={() => u.followed ? unSubscribe(u.id) : subscribe(u.id)}>{u.followed ? 'Unfollow' : 'Follow'}</button>
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



