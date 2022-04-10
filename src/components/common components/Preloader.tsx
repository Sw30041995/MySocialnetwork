import React from 'react';
import preloader from '../../assets/preloader.gif';

export const Preloader = () => {
    return (
        <div>
            <img src={preloader} alt="loading"/>
        </div>
    )
}