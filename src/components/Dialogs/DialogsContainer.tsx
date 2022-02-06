import React from "react";
import {changeNewMessageTextAC, sendMessageAC} from '../../redux/dialogs-reducer';
import {ReduxStoreType} from "../../redux/redux-store";
import {Dialogs} from "./Dialogs";

type DialogsContainerPropsType = {
    store: ReduxStoreType
}

export const DialogsContainer = (props: DialogsContainerPropsType) => {

    const state = props.store.getState()

    const onSendMessage = () => props.store.dispatch(sendMessageAC())

    const onChangeMessageText = (newMessageText: string) => {
        props.store.dispatch(changeNewMessageTextAC(newMessageText))
    }

    return (
        <Dialogs dialogsPage={state.dialogs} newMessageText={state.dialogs.newMessageText} sendMessage={onSendMessage}
                 changeMessageText={onChangeMessageText}/>
    )
}