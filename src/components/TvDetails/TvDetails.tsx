import React, {FC} from 'react';

import {ITv} from '../../models';
import StarRatings from 'react-star-ratings';
import css from '../../components/MovieDetails/MovieDetails.module.css';

interface IProps {
    show: ITv;
}

const TvDetails: FC<IProps> = ({show}) => {
    const posterIMG = `https://image.tmdb.org/t/p/w400${show.poster_path}`;
    let backgroundIMG = `https://image.tmdb.org/t/p/original${show.backdrop_path}`;

    if (!show.backdrop_path) {
        backgroundIMG = 'https://www.net-zahid.net/wp-content/uploads/2019/01/Black-Background-Texture-Wallpaper-1920x1080.jpg';
    }

    if (show.overview === '') {
        show.overview = 'Here had be description, but API dont give his';
    }

    return (
        <div>
            <img src={backgroundIMG} alt={show.backdrop_path} className={css.movieDetails}/>
            <img src={posterIMG} alt={show.poster_path} className={css.poster}/>
            <h1 className={css.title}>{show.original_name}</h1>
            <div className={css.stars}>
                <StarRatings
                    numberOfStars={10}
                    rating={show.vote_average}
                    starDimension='20px'
                    starSpacing='3px'
                    starRatedColor={'yellow'}
                />
            </div>
            <span className={css.description}>{show.overview}</span>
            <span className={css.date}>{show.first_air_date}</span>
        </div>
    );
};

export {
    TvDetails
};