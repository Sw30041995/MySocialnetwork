import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import React from "react";
import {RootStateType, store} from "./redux/state";

export const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(<App state={state}
                         dispatch={store.dispatch.bind(store)}/>, document.getElementById('root'));
}

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)
