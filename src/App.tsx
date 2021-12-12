import React from 'react';
import './App.css';
import {Navbar} from "./components/NavBar/Navbar";
import {Header} from "./components/Header/Header";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {state} from "./redux/state";

export const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar sidebar={state.sidebar}/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile/*' element={<Profile profilePage={state.profilePage}/>}/>
                        <Route path='/dialogs/*' element={<Dialogs dialogsPage={state.dialogsPage}/>}/>

                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}