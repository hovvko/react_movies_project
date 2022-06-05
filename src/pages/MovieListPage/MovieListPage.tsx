import React, {FC, useEffect} from 'react';
import {Link, useSearchParams} from 'react-router-dom';

import {useAppDispatch, useAppSelector} from '../../hooks';
import {getMovies} from '../../redux';
import css from './MovieListPage.module.css';
import StarRatings from 'react-star-ratings';
import {Filters, GenreBadge, MovieInfo, Pagination, PosterPreview} from '../../components';

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
                    movies.map(movie =>
                        <Link key={movie.id} to={movie.id.toString()} className={css.movieLink} state={movie}>
                            <div className={css.movie}>
                                <PosterPreview key={movie.poster_path} poster_path={movie.poster_path}/>
                                <div className={css.star}>
                                    <StarRatings
                                        numberOfStars={10}
                                        rating={movie.vote_average}
                                        starDimension='10px'
                                        starSpacing='3px'
                                        starRatedColor={'blue'}
                                    />
                                    <span className={css.voteRating}>{movie.vote_average}</span>
                                </div>
                                <MovieInfo key={movie.title} title={movie.title}/>
                                <GenreBadge key={movie.overview} genre_ids={movie.genre_ids}/>
                            </div>
                        </Link>
                    )
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