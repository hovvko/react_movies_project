import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {IMovie, IMovieData} from "../../models";
import {moviesService} from "../../services/movie.service";

interface IState {
    movies: IMovie[]
}

const initialState: IState = {
    movies: []
};

const getMovies = createAsyncThunk<IMovieData<IMovie>, { page: number }>(
    'moviesSlice/getAll',
    async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getAll(page);
            return data
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
                state.movies = action.payload.results;
            })
    }
})

const {reducer: movieReducer} = movieSlice;

export {
    movieReducer
};

export {
    getMovies
}
