import React, {FC, useEffect} from 'react';
import {useSearchParams} from 'react-router-dom';

import {useAppDispatch, useAppSelector} from '../../hooks';
import {getMovies} from '../../redux';
import css from './MovieListPage.module.css';
import {Filters, Multimedia, Pagination} from '../../components';

const MovieListPage: FC = () => {
    const [query] = useSearchParams({page: '1'});
    const {page} = Object.fromEntries(query.entries());

    const {movies} = useAppSelector(state => state.movieReducer);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getMovies({page: +page}));
    }, [dispatch, page]);

    return (
        <div className={css.container}>
            <Filters/>
            <div className={css.movies}>
                {
                    movies.map(movie => <Multimedia key={movie.id} multimedia={movie}/>)
                }
            </div>
            <Pagination/>
            <div className={css.footer}></div>
        </div>
    );
};

export {
    MovieListPage
};