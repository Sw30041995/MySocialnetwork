import React from 'react';
import './App.css';
import {Navbar} from "./components/NavBar/Navbar";
import {Header} from "./components/Header/Header";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {state, RootStateType} from "./redux/state";
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';

type PropsType = {
    state: RootStateType
    addPost: () => void
    changeNewPostText: (newText: string) => void
}

export const App = (props: PropsType) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar sidebar={state.sidebar}/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile/'
                               element={<Profile profilePage={props.state.profilePage}
                                                 addPost={props.addPost}
                                                 changeNewPostText={props.changeNewPostText}/>}/>
                        <Route path='/dialogs/' element={<Dialogs dialogsPage={props.state.dialogsPage}/>}/>
                        <Route path='/news/' element={<News/>}/>
                        <Route path='/music/' element={<Music/>}/>
                        <Route path='/settings/' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}