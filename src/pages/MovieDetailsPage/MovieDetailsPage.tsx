import React, {FC, useEffect, useState} from 'react';
import {useLocation, useParams} from 'react-router-dom';

import {IMovie} from '../../models';
import {moviesService} from '../../services';
import {MovieDetails} from '../../components';

const MovieDetailsPage: FC = () => {
    const [movie, setMovie] = useState<IMovie | null>(null);

    const locationMovie = useLocation().state as IMovie;
    const {id} = useParams<{ id: string }>();

    useEffect(() => {
        if (locationMovie) {
            setMovie(locationMovie);
        } else {
            if (id) {
                moviesService.getByID(+id).then(({data}) => setMovie(data));
            }
        }
    }, [locationMovie, id]);

    return (
        <div>
            {movie && <MovieDetails movie={movie}/>}
        </div>

    );
};

export {
    MovieDetailsPage
};