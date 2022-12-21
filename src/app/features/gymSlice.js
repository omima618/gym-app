import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import gymsDB from '../axios/axios';

const initialState = {
    gyms: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: '',
    paginate: 1,
};

const getAllGyms = createAsyncThunk('gems/getGyms', async (_, thunkAPI) => {
    try {
        const { data } = await gymsDB().get();
        return data.data;
    } catch (error) {
        const message = error.message;
        return thunkAPI.rejectWithValue(message);
    }
});

const gymSlice = createSlice({
    name: 'gyms',
    initialState,
    reducers: {
        setPaginate(state, action) {
            state.paginate = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllGyms.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllGyms.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.gyms = action.payload;
            })
            .addCase(getAllGyms.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            });
    },
});

export const requests = {
    getAllGyms,
};
export const gymActions = gymSlice.actions;

export default gymSlice.reducer;
