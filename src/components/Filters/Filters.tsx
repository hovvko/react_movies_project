import React, {FC, useState} from 'react';
import {useLocation} from 'react-router-dom';

import css from './Filters.module.css';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {filterWithGenres, filterWithTvGenres} from '../../redux';
import {locationUrls} from '../../configs';

const Filters: FC = () => {
    const {genres} = useAppSelector(state => state.genreReducer);
    const {tvGenres} = useAppSelector(state => state.tvGenreReducer);

    const [checkedTvGenreIds] = useState<number[]>([]);
    const [checkedGenreIds] = useState<number[]>([]);

    const {search, pathname, } = useLocation();
    const dispatch = useAppDispatch();

    const checked = (genreId: number): void => {
        let currentPage = search.slice(search.length - 1, search.length);

        if (currentPage === '') {
            currentPage = '1';
        }

        if (pathname === locationUrls.movies) {

            if (checkedGenreIds.includes(genreId)) {
                const currentIndex = checkedGenreIds.findIndex(indexID => indexID === genreId);

                checkedGenreIds.splice(currentIndex, 1);
                dispatch(filterWithGenres({page: +currentPage, genres: checkedGenreIds}));
            } else {
                checkedGenreIds.push(genreId);
                dispatch(filterWithGenres({page: +currentPage, genres: checkedGenreIds}));
            }

        } else {

            if (checkedTvGenreIds.includes(genreId)) {
                const currentIndex = checkedTvGenreIds.findIndex(indexID => indexID === genreId);

                checkedTvGenreIds.splice(currentIndex, 1);
                dispatch(filterWithTvGenres({page: +currentPage, genres: checkedTvGenreIds}));
            } else {
                checkedTvGenreIds.push(genreId);
                dispatch(filterWithTvGenres({page: +currentPage, genres: checkedTvGenreIds}));
            }
        }
    };

    if (pathname === locationUrls.movies) {
        return (
            <div className={css.filters} id={'filters'}>
                <ul className={css.list}>
                    {
                        genres.map(genre =>
                            <li key={genre.name} className={css.liGenre}>
                                <input type='checkbox' id={genre.name} onChange={() => {
                                    checked(genre.id)
                                }}/>
                                <label htmlFor={genre.name} className={css.genreName}>{genre.name}</label>
                            </li>
                        )
                    }
                </ul>
            </div>
        );
    }

    return (
        <div className={css.tvFilters} id={'filters'}>
            <ul className={css.list}>
                {
                    tvGenres.map(genre =>
                        <li key={genre.name} className={css.liGenre}>
                            <input type='checkbox' id={genre.name} onChange={() => {
                                checked(genre.id)
                            }}/>
                            <label htmlFor={genre.name} className={css.genreName}>{genre.name}</label>
                        </li>
                    )
                }
            </ul>
        </div>
    );
};

export {
    Filters
};