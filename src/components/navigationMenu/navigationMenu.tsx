import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';

import css from './navigationMenu.module.css';
import {Searcher} from '../../components';

const NavigationMenu: FC = () => {
    return (
        <div className={css.topMenu}>
            <Searcher/>
            <div className={css.links}>
                <NavLink to={'/movies'}>Home</NavLink>
                <NavLink to={'/popular'}>Popular</NavLink>
                <NavLink to={'/new'}>New</NavLink>
            </div>
            <img src="https://cdn-icons-png.flaticon.com/512/219/219983.png" alt="user"/>
        </div>
    );
};

export {
    NavigationMenu
};