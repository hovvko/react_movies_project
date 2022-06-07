import React, {FC, useEffect, useState} from 'react';
import {useLocation, useParams} from 'react-router-dom';

import {IMovie} from '../../models';
import {MovieDetails} from '../../components';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getById} from '../../redux';

const MovieDetailsPage: FC = () => {
    const [movie, setMovie] = useState<IMovie | null>(null);
    const {movieById} = useAppSelector(state => state.movieReducer);

    const locationMovie = useLocation().state as IMovie;
    const {id} = useParams<{ id: string }>();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (id) {
            dispatch(getById({id: +id}));
        }
    }, [id, dispatch]);

    useEffect(() => {
        if (locationMovie) {
            setMovie(locationMovie);
        } else {
            setMovie(movieById);
        }
    }, [locationMovie, id, movieById]);

    return (
        <div>
            {movie && <MovieDetails movie={movie}/>}
        </div>

    );
};

export {
    MovieDetailsPage
};