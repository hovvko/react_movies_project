import React, {FC} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';

import {NavigationMenu} from './components';
import {MovieDetailsPage, MovieListPage, TrendingPage, TvDetailsPage, TvPage} from './pages';

const App: FC = () => {
    return (
        <Routes>
            <Route path={'/'} element={<NavigationMenu/>}>
                <Route index element={<Navigate to={'movies'}/>}/>
                <Route path={'movies'} element={<MovieListPage/>}/>
                <Route path={'movies/:id'} element={<MovieDetailsPage/>}/>
                <Route path={'movieTrending'} element={<TrendingPage/>}/>
                <Route path={'tv'} element={<TvPage/>}/>
                <Route path={'tv/:id'} element={<TvDetailsPage/>}/>
            </Route>
        </Routes>
    );
};

export default App;
