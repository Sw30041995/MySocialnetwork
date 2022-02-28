import React from "react";
import {changeNewMessageTextAC, DialogsPageType, sendMessageAC} from '../../redux/dialogs-reducer';
import {Dialogs} from "./Dialogs";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";

type MapStatePropsType = {
    dialogsPage: DialogsPageType
}

type mapDispatchPropsType = {
    sendMessage: () => void
    changeMessageText: (newMessageText: string) => void
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}

export type DialogsPropsType = MapStatePropsType & mapDispatchPropsType

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
    return {
        sendMessage: () => dispatch(sendMessageAC()),
        changeMessageText: (newMessageText: string) => dispatch(changeNewMessageTextAC(newMessageText))
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)