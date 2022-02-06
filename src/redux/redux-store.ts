import {combineReducers, createStore} from "redux";
import profileReducer, {AddPostActionType, ChangeNewPostTextType, ProfilePageType} from "./profile-reducer";
import dialogsReducer, {ChangeNewMessageTextType, DialogsPageType, SendMessageActionType} from "./dialogs-reducer";
import sidebarReducer, {SidebarType} from "./sidebar-reducer";

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

export type ActionType = AddPostActionType | ChangeNewPostTextType | SendMessageActionType | ChangeNewMessageTextType

const reducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    sidebar: sidebarReducer
})

export type ReducersType = typeof reducers
export type AppStateType = ReturnType<ReducersType>
const store = createStore(reducers)

export default store