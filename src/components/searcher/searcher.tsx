import React, {FC} from 'react';

import css from './searcher.module.css';

const Searcher: FC = () => {
    return (
        <div>
            <input placeholder={'Type...'} className={css.searcher}/>
        </div>
    );
};

export {
    Searcher
};

