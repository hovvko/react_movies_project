import React, {FC, useEffect} from 'react';

import {Multimedia,} from '../../components';
import css from './TrendingPage.module.css';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getTrendingMovies} from '../../redux';

const TrendingPage: FC = () => {
    const {trendingMovies} = useAppSelector(state => state.movieReducer);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getTrendingMovies());
    }, [dispatch]);

    return (
        <div className={css.trendingMovies}>
            {
                trendingMovies.map(movie => <Multimedia key={movie.id} multimedia={movie}/>)
            }
            <div className={css.trendingFooter}></div>
        </div>
    );
};

export {
    TrendingPage
};