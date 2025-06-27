import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavourite, removeFavourite } from '../../Store/Slices/Favourites/FavouritesSlice';
import { CiStar } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa';



// SVG Icons for the card (you can move these to a separate file if you prefer)
const PlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const SmallPlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const EyeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
  </svg>
);

const MovieIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z" />
  </svg>
);


export default function MovieCard({ movie, handleViewDetails }) {
  const dispatch = useDispatch();
  const favourites = useSelector(state => state.favourite.items);
  const isFav = favourites.some(item => item.id === movie.id);

  const toggleFavourite = (e) => {
    e.stopPropagation();
    isFav ? dispatch(removeFavourite(movie.id)) : dispatch(addFavourite(movie));
  };


  return (
    // The main container uses `group` to enable group-hover states on child elements
    <div className="group relative rounded-lg overflow-hidden shadow-lg cursor-pointer" onClick={() => handleViewDetails(movie.id)}>
      {/* Background Image */}
      <img
        className="z w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : "https://via.placeholder.com/500x750?text=No+Image"
        }
        alt={movie.title || movie.name}
      />

      {/* Favorite Star Icon in top-right */}
      <div className=" absolute top-2 left-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
        {/* <button className='cursor-pointer' onClick={(e)=>{e.stopPropagation(); toggleFavourite() }} >
    <StarIcon filled={true} />
  </button> */}
        <button className='cursor-pointer' onClick={toggleFavourite}>
          {/* <StarIcon filled={isFav} /> */}
          {
            isFav ? <FaStar className='text-yellow-600 text-5xl' /> : <CiStar className='text-yellow-600 text-5xl' />

          }
        </button>
      </div>



      {/* --- HOVER OVERLAY --- */}
      {/* This overlay becomes visible on hover */}
      {/* <div className=" absolute inset-0  bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex flex-col justify-between p-4"> */}
      {/* <div className="absolute inset-0    flex flex-col justify-between p-4"> */}
      <div className="absolute inset-0 hover:bg-black/50   flex flex-col justify-between p-4">

        {/* Top genre tags (visible on hover) */}
        <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 backdrop-blur-sm">
            دراما{ } <SmallPlayIcon />
          </span>
          <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 backdrop-blur-sm">
            جريمة <SmallPlayIcon />
          </span>
        </div>

        {/* Center play button (visible on hover) */}
        <div className="flex-grow flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300">
          <div className="bg-sky-950 text-white  rounded-full w-20 h-20 flex items-center justify-center shadow-lg">
            <PlayIcon />
          </div>
        </div>

        <div className="flex justify-center opacity-0 group-hover:opacity-100  mb-10   ">
          <div className="min-w-max rounded-full text-white bg-white/60 px-4 py-2 w-10 h-10 flex items-center justify-center shadow-lg font-bold text-2xl">
            {movie.vote_average.toFixed(1)}/10
          </div>
        </div>

        {/* Bottom info tags (visible on hover) */}
        <div className="mb-10 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {/* <span className="bg-purple-600/80 text-white text-sm font-bold px-4 py-0.5 rounded-full flex items-center gap-2 backdrop-blur-sm"> */}
          <span className=" bg-purple-600/80 text-white text-sm font-bold px-4 py-0.5 rounded-full flex items-center gap-2 backdrop-blur-sm">
            <MovieIcon />   
                {movie.genres?.[0]?.name || "Unknown"}
          </span>
          <span className="bg-white/20 rounded-full text-white text-sm font-bold flex items-center gap-2">
            {movie.vote_count} <EyeIcon />
          </span>
        </div>
      </div>

      {/* --- NORMAL STATE TITLE --- */}
      {/* This sits outside the overlay and is always visible */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
        <h3 className="text-white text-lg font-bold text-center">
          {movie.title || movie.name} ({(movie.release_date || movie.first_air_date || 'N/A').substring(0, 4)})
        </h3>
      </div>
    </div>
  );
}