import React from "react";
import style from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import {SidebarType} from "../../redux/state";
import {Friends} from "./Friends/Friends";

type PropsType = {
    sidebar: SidebarType
}

export const Navbar = (props: PropsType) => {

    let friendsElements = props.sidebar.friends.map(f => <Friends avatarUrl={f.avatarUrl} name={f.name} key={f.id}/>)

    return (
        <nav className={style.nav}>
            <ul>
                <li><NavLink to="/profile">Profile</NavLink></li>
                <li><NavLink to="/dialogs">Messages</NavLink></li>
                <li><NavLink to="/news">News</NavLink></li>
                <li><NavLink to="/music">Music</NavLink></li>
                <li><NavLink to="/settings">Settings</NavLink></li>
            </ul>
            <div className={style.friendsHeader}>Friends</div>
            <div className={style.friends}>
                {friendsElements}
            </div>
        </nav>
    );
}
