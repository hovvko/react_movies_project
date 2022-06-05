import React, {FC, useEffect} from 'react';
import {useLocation, useSearchParams} from 'react-router-dom';

import css from './Pagination.module.css';
import {useAppDispatch} from '../../hooks';
import {getMovies, getTv} from '../../redux';
import {locationUrls} from '../../configs';

const Pagination: FC = () => {
    const [query, setQuery] = useSearchParams({page: '1'});

    const dispatch = useAppDispatch();
    const {pathname, key} = useLocation();

    const {page} = Object.fromEntries(query.entries());

    useEffect(() => {
        const {page} = Object.fromEntries(query.entries());

        if (+page !== 1) {
            dispatch(getMovies({page: +page}));
        } else {
            dispatch(getMovies({page: 1}));
        }

    }, [dispatch, page, query, key]);

    const nextPage = () => {
        const nextPage = +page + 1;

        if (pathname === locationUrls.movies) {
            dispatch(getMovies({page: nextPage}));
        } else {
            dispatch(getTv({page: nextPage}));
        }

        setQuery({page: nextPage.toString()});
    }

    const prevPage = () => {
        const {page} = Object.fromEntries(query.entries());

        let prevPage = +page - 1;

        if (prevPage < 1) {
            prevPage = +page;
        }

        if (pathname === locationUrls.movies) {
            dispatch(getMovies({page: prevPage}));
        } else {
            dispatch(getTv({page: prevPage}));
        }

        setQuery({page: prevPage.toString()});
    }

    return (
        <div className={css.pagination} id={'pagination'}>
            <button onClick={() => prevPage()} className={css.prev}>Prev</button>
            <button onClick={() => nextPage()} className={css.next}>Next</button>
        </div>
    );
};

export {
    Pagination
};