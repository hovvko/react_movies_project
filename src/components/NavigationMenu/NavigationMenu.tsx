import React, {FC, useEffect, useState} from 'react';
import {NavLink, Outlet, useLocation} from 'react-router-dom';

import css from './NavigationMenu.module.css';
import {Searcher} from '../../components';

const NavigationMenu: FC = () => {
    const [theme, setTheme] = useState<boolean>(false);
    const location = useLocation();

    useEffect(() => {
        const body = document.querySelector('body')!;
        const filters = document.getElementById('filters')!;

        if (theme) {
            body?.setAttribute('style', 'background: #1E2931; color: white;');
            filters?.setAttribute('style', 'background: #1E2931; color: white;');
        } else {
            body?.setAttribute('style', 'background: #F6F6F6; color: black;');
            filters?.setAttribute('style', 'background: #F6F6F6; color: black;');
        }
    }, [theme, location]);

    return (
        <div>
            <div className={css.topMenu}>
                <div className={css.searcher}><Searcher/></div>
                <div className={css.links}>
                    <NavLink to={'/movies'}>Home</NavLink>
                    <NavLink to={'/movieTrending'}>Movie Trending</NavLink>
                    <NavLink to={'/tv'}>TV Shows</NavLink>
                </div>
                <label className={css.switch}>
                    <input type='checkbox' onChange={() => setTheme(!theme)} checked={theme}/>
                    <span className={css.slider}></span>
                </label>
                <img src='https://cdn-icons-png.flaticon.com/512/219/219983.png' alt='user' className={css.userImage}/>
            </div>
            <Outlet/>
        </div>
    );
};

export {
    NavigationMenu
};
