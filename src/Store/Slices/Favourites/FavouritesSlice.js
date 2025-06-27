// import { createSlice } from '@readuxjs/toolkit';
// import { createSlice } from '@reduxjs/toolkit';

import { createSlice } from '@reduxjs/toolkit';

const favouriteSlice = createSlice({
    name: 'favourite',
    initialState: {
        items: [],
    },

    reducers: {
        addFavourite: (state, action) => {
            state.items.push(action.payload);
        },
        removeFavourite: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },

    }
},

)

export const {addFavourite,removeFavourite} = favouriteSlice.actions;
export default favouriteSlice.reducer;
