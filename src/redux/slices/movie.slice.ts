import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {IMovie} from '../../models';
import {moviesService} from '../../services';

interface IState {
    movies: IMovie[];
}

const initialState: IState = {
    movies: []
};

const getMovies = createAsyncThunk<IMovie[], { page: number }>(
    'moviesSlice/getAll',
    async ({page}, {rejectWithValue}) => {
        try {
            const {data: {results}} = await moviesService.getAll(page);

            return results;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

const filterWithGenres = createAsyncThunk<IMovie[], { page: number, genres: number[] }>(
    'movieSlice/filterWithGenres',
    async ({page, genres}, {rejectWithValue}) => {
        try {
            const {data: {results}} = await moviesService.getWithGenres(page, genres.toString());

            return results;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);


const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getMovies.fulfilled, (state, action) => {
                state.movies = action.payload;
            })
            .addCase(filterWithGenres.fulfilled, (state, action) => {
                state.movies = action.payload;
            })
    }
})

const {reducer: movieReducer} = movieSlice;

export {
    movieReducer
};

export {
    getMovies,
    filterWithGenres
};

