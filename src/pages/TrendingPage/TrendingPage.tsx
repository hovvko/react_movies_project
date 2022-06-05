import React, {FC, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

import {moviesService} from '../../services';
import {GenreBadge, MovieInfo, PosterPreview} from '../../components';
import StarRatings from 'react-star-ratings';
import css from './TrendingPage.module.css';
import {IMovie} from '../../models';

const TrendingPage: FC = () => {
    const [trendingMovie, setTrendingMovie] = useState<IMovie[]>([]);

    useEffect(() => {
        moviesService.getTrending().then(({data: {results}}) => setTrendingMovie(results));
    }, []);

    return (
        <div className={css.trendingMovies}>
            {
                trendingMovie.map(movie =>
                    <Link key={movie.id} to={`/movies/${movie.id.toString()}`} className={'movieLink'} state={movie}>
                        <div className={css.trendingMovie}>
                            <PosterPreview key={movie.poster_path} poster_path={movie.poster_path}/>
                            <div className={css.trendingStar}>
                                <StarRatings
                                    numberOfStars={10}
                                    rating={movie.vote_average}
                                    starDimension='10px'
                                    starSpacing='3px'
                                    starRatedColor={'blue'}
                                />
                                <span className={'voteRating'}>{movie.vote_average}</span>
                            </div>
                            <MovieInfo key={movie.title} title={movie.title}/>
                            <GenreBadge key={movie.overview} genre_ids={movie.genre_ids}/>
                        </div>
                    </Link>
                )
            }
            <div className={css.trendingFooter}></div>
        </div>
    );
};

export {
    TrendingPage
};