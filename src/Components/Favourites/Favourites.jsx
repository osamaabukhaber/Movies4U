import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFavourite } from '../../Store/Slices/Favourites/FavouritesSlice';
import MovieCard from '../Movie/MovieCard';

export default function Favourites() {
  const favourites = useSelector(state => state.favourite.items);
  const dispatch = useDispatch();



  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-4xl font-extrabold text-center mb-4 text-gray-900 dark:text-white">
          Favourite Movies
        </h2>
        {favourites.length === 0 ? (
          <div className="text-center text-gray-500 dark:text-gray-400 text-2xl">
            No favourites yet.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {favourites.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                showDelete={true}
                onDelete={() => dispatch(removeFavourite(movie.id))}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}