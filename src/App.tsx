import React from 'react';
import './App.css';
import {Navbar} from "./components/NavBar/Navbar";
import {Header} from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from './components/Dialogs/Dialogs';
import {Users} from "./components/Users/Users";

export const App = () => {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/profile/:userId'
                           element={<Profile/>}/>
                    <Route path='/dialogs'
                           element={<Dialogs/>}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                    <Route path='/users' element={<Users/>}/>
                </Routes>
            </div>
        </div>
    )
}