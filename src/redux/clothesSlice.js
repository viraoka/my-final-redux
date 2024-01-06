import { createSlice } from '@reduxjs/toolkit';

export const clothesSlice = createSlice({
    name: 'clothes',
    initialState: {
        selectedCategory: "DRESSES"
    },
    reducers: {
        filterCategory: (state, action) => {
            state.selectedCategory = action.payload
        }
    }
})

export const { filterCategory } = clothesSlice.actions;
export const getSelectedCategory = state => state.clothes.selectedCategory;
export default clothesSlice.reducer;