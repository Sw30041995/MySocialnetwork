import {ActionType} from "./redux-store";
import {v1} from "uuid";

export type SubscribeActionType = {
    type: 'FOLLOW',
    userId: number
}
export type UnSubscribeActionType = {
    type: 'UNFOLLOW',
    userId: number
}
export type SetUsersType = {
    type: 'SET-USERS'
    users: Array<UserType>
}
export type UsersPageType = {
    users: Array<UserType>
}
export type UserType = {
    id: number
    photos: { small: string, large: string }
    name: string
    uniqueUrlName: string
    status: string
    followed: boolean
}

const initialState: UsersPageType = {
    users: []
}

export const usersReducer = (state: UsersPageType = initialState, action: ActionType): UsersPageType => {
    switch (action.type) {
        case 'FOLLOW':
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, signed: true} : u)}
        case 'UNFOLLOW':
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, signed: false} : u)}
        case 'SET-USERS':
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }
}

export const subscribeAC = (userId: number): SubscribeActionType => ({
    type: 'FOLLOW',
    userId
})

export const unSubscribeAC = (userId: number): UnSubscribeActionType => ({
    type: 'UNFOLLOW',
    userId
})

export const setUsersAC = (users: Array<UserType>): SetUsersType => ({
    type: 'SET-USERS',
    users
})

console.log(initialState)
