import React from 'react';
import './App.css';
import {Navbar} from "./components/NavBar/Navbar";
import {Header} from "./components/Header/Header";
import {Profile} from "./components/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import {ActionType, AppStateType, ReduxStoreType} from "./redux/redux-store";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

type PropsType = {
    state: AppStateType
    dispatch: (action: ActionType) => void
    store: ReduxStoreType
}
export const App = (props: PropsType) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar sidebar={props.state.sidebar}/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/profile/'
                           element={<Profile store={props.store}/>}/>
                    <Route path='/dialogs/'
                           element={<DialogsContainer store={props.store}/>}/>
                    <Route path='/news/' element={<News/>}/>
                    <Route path='/music/' element={<Music/>}/>
                    <Route path='/settings/' element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    )
}