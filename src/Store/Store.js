// // import {configureStore} from'@readuxjs/toolkit';
// // import {configureStore } from '@readuxjs/toolkit';
// import { configureStore } from '@reduxjs/toolkit';


// import favouriteReducer from '../Store/Slices/Favourites/FavouritesSlice';

// const store = configureStore({
//     reducer : {
//         favourite :favouriteReducer,
//     },

// })

// export default store;

// import {configureStore} from'@readuxjs/toolkit';
// import {configureStore } from '@readuxjs/toolkit';
// import { configureStore } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';


import favouriteReducer from '../Store/Slices/Favourites/FavouritesSlice';

const store = configureStore({
    reducer : {
        favourite :favouriteReducer,
    },

})

export default store;