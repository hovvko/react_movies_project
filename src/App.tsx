import React, {FC, useEffect} from 'react';
import {NavigationMenu} from "./components";
import {useAppDispatch, useAppSelector} from "./hooks";
import {getGenres, getMovies} from "./redux";
import {moviesService} from "./services/movie.service";
import {log} from "util";

const App: FC = () => {
    const dispatch = useAppDispatch();
    //
    const {movies} = useAppSelector(state => state.movieReducer);
    // const selector = useAppSelector(state => state.genreReducer)
    //
    useEffect(()=> {
        dispatch(getMovies({page: 1}))
        // dispatch(getGenres())
    }, [dispatch])
    //
    console.log(movies)
    // console.log(selector)

    return (
        <div>
            <NavigationMenu/>
        </div>
    );
};

export default App;
