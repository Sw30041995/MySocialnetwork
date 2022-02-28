import {combineReducers, createStore} from "redux";
import profileReducer, {AddPostActionType, ChangeNewPostTextActionType} from "./profile-reducer";
import dialogsReducer, {ChangeNewMessageTextActionType, SendMessageActionType} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import {SetUsersType, SubscribeActionType, UnSubscribeActionType, usersReducer} from "./users-reducer";

export type ActionType =
    AddPostActionType
    | ChangeNewPostTextActionType
    | SendMessageActionType
    | ChangeNewMessageTextActionType
    | SubscribeActionType
    | UnSubscribeActionType
    | SetUsersType

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    sidebarPage: sidebarReducer
})

export type AppStateType = ReturnType<typeof rootReducer>
export type ReduxStoreType = typeof store
const store = createStore(rootReducer)

export default store