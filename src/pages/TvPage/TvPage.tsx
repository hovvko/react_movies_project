import React, {FC, useEffect} from 'react';
import {Link, useSearchParams} from 'react-router-dom';

import {useAppDispatch, useAppSelector} from '../../hooks';
import {getTv} from '../../redux';
import {Filters, GenreBadge, MovieInfo, Pagination, PosterPreview} from '../../components';
import css from './TvPage.module.css';
import StarRatings from 'react-star-ratings';

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
                    tv.map(show =>
                        <Link to={show.id.toString()} key={show.id} state={show}>
                            <div className={css.show}>
                                <PosterPreview poster_path={show.poster_path}/>
                                <div className={css.showStar}>
                                    <StarRatings
                                        numberOfStars={10}
                                        rating={show.vote_average}
                                        starDimension='10px'
                                        starSpacing='3px'
                                        starRatedColor={'blue'}
                                    />
                                    <span className={css.voteRating}>{show.vote_average}</span>
                                </div>
                                <MovieInfo key={show.name} title={show.name}/>
                                <GenreBadge key={show.overview} genre_ids={show.genre_ids}/>
                            </div>
                        </Link>
                    )
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