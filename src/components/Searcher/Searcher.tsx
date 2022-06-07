import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import {Link, useLocation} from 'react-router-dom';

import css from './Searcher.module.css';
import {moviesService, tvService} from '../../services';
import {IMovie, ITv} from '../../models';
import {locationUrls} from '../../configs';

const Searcher: FC = () => {
    const [wordEntered, setWordEntered] = useState<string>('');
    const [movies, setMovies] = useState<IMovie[] | ITv[]>([]);
    const {pathname} = useLocation();

    const link: string = (pathname.includes(locationUrls.movies) || pathname.includes('/movieTrending')) ? locationUrls.movies : locationUrls.tv;

    const handleFilter = (event: ChangeEvent<HTMLInputElement>) => {
        const searchWord = event.target.value;

        setWordEntered(searchWord);

        if (searchWord === '') {
            setMovies([]);
        } else {

            if (pathname.includes(locationUrls.movies) || pathname.includes('/movieTrending')) {
                moviesService.search(searchWord).then(({data: {results}}) => setMovies(results));
            }
            if (pathname.includes(locationUrls.tv)) {
                tvService.search(searchWord).then(({data: {results}}) => setMovies(results));
            }

        }
    };

    useEffect(() => {
        setMovies([]);
        setWordEntered('');
    }, [pathname]);

    const clearInput = () => {
        setMovies([]);
        setWordEntered('');
    };

    return (
        <div className={css.search}>
            <div className={css.searchInputs}>
                <input
                    type='text'
                    placeholder='Type...'
                    value={wordEntered}
                    onChange={handleFilter}
                />
                <div className={css.searchIcon}>
                    {movies.length === 0 ? (
                        <SearchIcon/>
                    ) : (
                        <CloseIcon id='clearBtn' onClick={clearInput}/>
                    )}
                </div>
            </div>
            {movies.length !== 0 && (
                <div className={css.dataResult}>
                    {movies.slice(0, 15).map((value) => {
                        return (
                            <Link className={css.dataItem} to={`${link}/${value.id}`} key={value.id}>
                                <p>
                                    {(pathname.includes(locationUrls.movies) || pathname.includes('/movieTrending')) ? value.title : value.name}
                                </p>
                            </Link>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export {
    Searcher
};

