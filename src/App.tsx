import React from 'react';
import './App.css';
import {Navbar} from "./components/NavBar/Navbar";
import {Header} from "./components/Header/Header";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import {ActionType, AppStateType} from "./redux/redux-store";

type PropsType = {
    state: AppStateType
    dispatch: (action: ActionType) => void
    store: any
}
export const App = (props: PropsType) => {
    return (
            <div className="app-wrapper">
                <Header/>
                <Navbar sidebar={props.state.sidebar}/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile/'
                               element={<Profile profilePage={props.state.profile}
                                                 dispatch={props.dispatch}/>}/>
                        <Route path='/dialogs/'
                               element={<Dialogs dialogsPage={props.state.dialogs} dispatch={props.dispatch}/>}/>
                        <Route path='/news/' element={<News/>}/>
                        <Route path='/music/' element={<Music/>}/>
                        <Route path='/settings/' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
    )
}