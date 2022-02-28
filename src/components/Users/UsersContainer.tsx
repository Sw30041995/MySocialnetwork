import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {setUsersAC, subscribeAC, unSubscribeAC, UserType} from "../../redux/users-reducer";

type MapStatePropsType = {
    users: Array<UserType>
}
type mapDispatchPropsType = {
    subscribe: (userId: number) => void
    unSubscribe: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
}
export type UsersPropsType = MapStatePropsType & mapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
    return {
        subscribe: (userId: number) => dispatch(subscribeAC(userId)),
        unSubscribe: (userId: number) => dispatch(unSubscribeAC(userId)),
        setUsers: (users: Array<UserType>) => dispatch(setUsersAC(users))
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)