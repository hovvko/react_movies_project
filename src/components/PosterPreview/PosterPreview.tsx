import React, {FC} from 'react';

import css from './PosterPreview.module.css';

interface IProps {
    poster_path: string;
}

const PosterPreview: FC<IProps> = ({poster_path}) => {
    const imgURL = `https://image.tmdb.org/t/p/w200${poster_path}`;

    return (
        <div>
            <img src={imgURL} alt='poster' className={css.poster}/>
        </div>
    );
};

export {
    PosterPreview
};