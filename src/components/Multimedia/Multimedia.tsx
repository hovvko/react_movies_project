import React, {FC} from 'react';
import {Link, useLocation} from 'react-router-dom';

import {IMovie, ITv} from '../../models';
import {PosterPreview} from '../PosterPreview/PosterPreview';
import {MovieInfo} from '../MovieInfo/MovieInfo';
import StarRatings from 'react-star-ratings';
import {GenreBadge} from '../GenreBadge/GenreBadge';
import {locationUrls} from '../../configs';
import css from './Multimedia.module.css';

interface IProps {
    multimedia: IMovie | ITv;
}

const Multimedia: FC<IProps> = ({multimedia}) => {
    const {pathname} = useLocation();

    if (pathname === locationUrls.movies || pathname === locationUrls.movieTrending) {
        return (
            <Link key={multimedia.id}
                  to={pathname === locationUrls.movies ? multimedia.id.toString() : `${locationUrls.movies}/${multimedia.id.toString()}`}
                  className={css.multimediaLink} state={multimedia}>
                <div className={css.multimedia}>
                    <PosterPreview key={multimedia.poster_path} poster_path={multimedia.poster_path}/>
                    <div className={css.star}>
                        <StarRatings
                            numberOfStars={10}
                            rating={multimedia.vote_average}
                            starDimension='10px'
                            starSpacing='3px'
                            starRatedColor={'blue'}
                        />
                        <span className={css.voteRating}>{multimedia.vote_average}</span>
                    </div>
                    <MovieInfo key={multimedia.title} title={multimedia.title}/>
                    <GenreBadge key={multimedia.overview} genre_ids={multimedia.genre_ids}/>
                </div>
            </Link>
        );
    }
    return (
        <Link to={multimedia.id.toString()} key={multimedia.id} state={multimedia} className={css.multimediaLink}>
            <div className={css.multimedia}>
                <PosterPreview poster_path={multimedia.poster_path}/>
                <div className={css.star}>
                    <StarRatings
                        numberOfStars={10}
                        rating={multimedia.vote_average}
                        starDimension='10px'
                        starSpacing='3px'
                        starRatedColor={'blue'}
                    />
                    <span className={css.voteRating}>{multimedia.vote_average}</span>
                </div>
                <MovieInfo key={multimedia.name} title={multimedia.name}/>
                <GenreBadge key={multimedia.overview} genre_ids={multimedia.genre_ids}/>
            </div>
        </Link>
    )
};

export {
    Multimedia
};