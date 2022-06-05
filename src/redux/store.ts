import {combineReducers, configureStore} from '@reduxjs/toolkit';

import {genreReducer, movieReducer, tvGenreReducer, tvReducer} from './slices';

const reducers = combineReducers({
    movieReducer,
    genreReducer,
    tvReducer,
    tvGenreReducer
});

const setupStore = () => configureStore({
    reducer: reducers
});

type RootState = ReturnType<typeof reducers>;
type AppStore = ReturnType<typeof setupStore>;
type AppDispatch = AppStore['dispatch'];

export type {
    RootState,
    AppStore,
    AppDispatch
};

export {
    setupStore
};