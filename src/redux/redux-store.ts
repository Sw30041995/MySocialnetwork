import {combineReducers, createStore} from "redux";
import profileReducer, {AddPostActionType, ChangeNewPostTextType} from "./profile-reducer";
import dialogsReducer, {ChangeNewMessageTextType, SendMessageActionType} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

export type ActionType = AddPostActionType | ChangeNewPostTextType | SendMessageActionType | ChangeNewMessageTextType

const reducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    sidebar: sidebarReducer
})

export type ReducersType = typeof reducers
export type AppStateType = ReturnType<ReducersType>
export type ReduxStoreType = typeof store
const store = createStore(reducers)

export default store