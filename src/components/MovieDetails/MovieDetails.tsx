import React, {FC} from 'react';

import css from './MovieDetails.module.css';
import {IMovie} from '../../models';
import StarRatings from 'react-star-ratings';

interface IProps {
    movie: IMovie
}

const MovieDetails: FC<IProps> = ({movie}) => {
    const backgroundIMG = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
    const posterIMG = `https://image.tmdb.org/t/p/w400${movie.poster_path}`;

    return (
        <div>
            <img src={backgroundIMG} alt={movie.backdrop_path} className={css.movieDetails}/>
            <img src={posterIMG} alt={movie.poster_path} className={css.poster}/>
            <h1 className={css.title}>{movie.original_title}</h1>
            <div className={css.stars}>
                <StarRatings
                    numberOfStars={10}
                    rating={movie.vote_average}
                    starDimension='20px'
                    starSpacing='3px'
                    starRatedColor={'yellow'}
                />
            </div>
            <span className={css.description}>{movie.overview}</span>
            <span className={css.date}>{movie.release_date}</span>
        </div>
    );
};

export {
    MovieDetails
};