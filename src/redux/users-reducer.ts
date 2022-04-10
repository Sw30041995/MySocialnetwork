const initialState: UsersPageType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 1,
    currentPage: 1,
    loading: false
}
export type UsersPageType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    loading: boolean
}
export type UserType = {
    id: number
    photos: { small: string, large: string }
    name: string
    uniqueUrlName: string
    status: string
    followed: boolean
}

type UsersActionType = SubscribeActionType
    | UnSubscribeActionType
    | SetUsersType
    | SetCurrentPageType
    | SetTotalUsersCountType
    | ToggleLoadingType

export const usersReducer = (state: UsersPageType = initialState, action: UsersActionType): UsersPageType => {
    switch (action.type) {
        case 'FOLLOW':
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)}
        case 'UNFOLLOW':
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)}
        case 'SET-USERS':
            return {...state, users: [...action.users]}
        case 'SET-CURRENT-PAGE':
            return {...state, currentPage: action.currentPage}
        case 'SET-TOTAL-USERS-COUNT':
            return {...state, totalUsersCount: action.totalUsersCount}
        case "TOGGLE-LOADING":
            return {...state, loading: action.loading}
        default:
            return state
    }
}

export const subscribeAC = (userId: number) => ({type: 'FOLLOW', userId} as const)
export const unSubscribeAC = (userId: number) => ({type: 'UNFOLLOW', userId} as const)
export const setUsers = (users: Array<UserType>) => ({type: 'SET-USERS', users} as const)
export const setCurrentPage = (currentPage: number) => ({type: 'SET-CURRENT-PAGE', currentPage} as const)
export const setTotalUsersCount = (totalUsersCount: number) =>
    ({type: 'SET-TOTAL-USERS-COUNT', totalUsersCount} as const)
export const toggleLoading = (loading: boolean) => ({type: 'TOGGLE-LOADING', loading} as const)

export type SubscribeActionType = ReturnType<typeof subscribeAC>
export type UnSubscribeActionType = ReturnType<typeof unSubscribeAC>
export type SetUsersType = ReturnType<typeof setUsers>
export type SetCurrentPageType = ReturnType<typeof setCurrentPage>
export type SetTotalUsersCountType = ReturnType<typeof setTotalUsersCount>
export type ToggleLoadingType = ReturnType<typeof toggleLoading>