import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {ITvGenre} from '../../models';
import {tvGenreService} from '../../services';

interface IState {
    tvGenres: ITvGenre[];
}

const initialState: IState = {
    tvGenres: []
};

const getTvGenres = createAsyncThunk<ITvGenre[], void>(
    'tvGenreSlice/getTvGenres',
    async (_, {rejectWithValue}) => {
        try {
            const {data: {genres}} = await tvGenreService.getAll();
            return genres;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

const tvGenreSlice = createSlice({
    name: 'tvGenreSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getTvGenres.fulfilled, (state, action) => {
                state.tvGenres = action.payload;
            })
    }
});

const {reducer: tvGenreReducer} = tvGenreSlice;

export {
    tvGenreReducer
};

export {
    getTvGenres
};