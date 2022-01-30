import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import React from "react";
import {addPost, changeNewPostText, RootStateType, state, subscribe} from "./redux/state";

export const rerenderEntireTree = () => {
    ReactDOM.render(<App state={state} addPost={addPost} changeNewPostText={changeNewPostText}/>, document.getElementById('root'));
}

rerenderEntireTree()

subscribe(rerenderEntireTree)