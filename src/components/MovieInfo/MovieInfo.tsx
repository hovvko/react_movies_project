import React, {FC} from 'react';

import css from './MovieInfo.module.css';

interface IProps {
    title?: string;
}

const MovieInfo: FC<IProps> = ({title}) => {
    return (
        <div className={css.description}>
            {title}
        </div>
    );
};

export {
    MovieInfo
};