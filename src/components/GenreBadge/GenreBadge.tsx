import React, {FC, useEffect} from 'react';
import {useLocation} from 'react-router-dom';

import {useAppDispatch, useAppSelector} from '../../hooks';
import {getGenres, getTvGenres} from '../../redux';
import css from './GenreBadge.module.css';

interface IProps {
    genre_ids: number[];
}

const GenreBadge: FC<IProps> = ({genre_ids}) => {
    const {genres} = useAppSelector(state => state.genreReducer);
    const {tvGenres} = useAppSelector(state => state.tvGenreReducer);

    const dispatch = useAppDispatch();
    const {pathname} = useLocation();

    useEffect(() => {
        dispatch(getGenres());
        dispatch(getTvGenres());
    }, [dispatch, pathname]);

    const movieGenre: string[] = [];
    const tvGenre: string[] = [];

    for (const genre of genres) {

        for (const genre_id of genre_ids) {

            if (genre.id === genre_id) {
                movieGenre.push(genre.name);
            }

        }

    }

    for (const genre of tvGenres) {

        for (const genre_id of genre_ids) {

            if (genre.id === genre_id) {
                tvGenre.push(genre.name);
            }

        }
    }

    if (pathname === '/movies') {
        return (
            <div className={css.genres}>
                {
                    movieGenre.map(genre => <span key={genre} className={css.genre}>{genre}</span>)
                }
            </div>
        );
    }

    return (
        <div className={css.genres}>
            {
                tvGenre.map(genre => <span key={genre} className={css.genre}>{genre}</span>)
            }
        </div>
    );

};

export {
    GenreBadge
};