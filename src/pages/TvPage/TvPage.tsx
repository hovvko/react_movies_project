import React, {FC, useEffect} from 'react';
import {useSearchParams} from 'react-router-dom';

import {useAppDispatch, useAppSelector} from '../../hooks';
import {getTv} from '../../redux';
import {Filters, Multimedia, Pagination} from '../../components';
import css from './TvPage.module.css';

const TvPage: FC = () => {
    const dispatch = useAppDispatch();
    const [query] = useSearchParams({page: '1'});
    const {page} = Object.fromEntries(query.entries());

    const {tv} = useAppSelector(state => state.tvReducer);

    useEffect(() => {
        dispatch(getTv({page: +page}));
    }, [dispatch, page]);

    return (
        <div>
            <Filters/>
            <div className={css.shows}>
                {
                    tv.map(show => <Multimedia key={show.id} multimedia={show}/>)
                }
            </div>
            <Pagination/>
            <div className={css.tvFooter}></div>
        </div>
    );
};

export {
    TvPage
};