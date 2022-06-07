import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {IMovie} from '../../models';
import {moviesService} from '../../services';

interface IState {
    movies: IMovie[];
    movieById: IMovie | null;
    trendingMovies: IMovie[];
}

const initialState: IState = {
    movies: [],
    movieById: null,
    trendingMovies: []
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

const getById = createAsyncThunk<IMovie, { id: number }>(
    'movieSlice/getById',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getByID(id);

            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

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

const getTrendingMovies = createAsyncThunk<IMovie[], void>(
    'movieSlice/getMoviesTrending',
    async (_, {rejectWithValue}) => {
        try {
            const {data: {results}} = await moviesService.getTrending();

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
            .addCase(getById.fulfilled, (state, action) => {
                state.movieById = action.payload;
            })
            .addCase(filterWithGenres.fulfilled, (state, action) => {
                state.movies = action.payload;
            })
            .addCase(getTrendingMovies.fulfilled, (state, action) => {
                state.trendingMovies = action.payload;
            })
    }
})

const {reducer: movieReducer} = movieSlice;

export {
    movieReducer
};

export {
    getMovies,
    filterWithGenres,
    getById,
    getTrendingMovies
};

