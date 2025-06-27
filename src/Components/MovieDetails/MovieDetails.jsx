// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// // import axiosInstance "../../axiosInstance/instance"
// import { Container, Card } from "react-bootstrap";

// export default function MovieDetails() {
//   const { id } = useParams();
//   const [movie, setMovie] = useState();
//   // const [loading, setLoading] = useState(true);
//   // useEffect(() => {
//   //     axios
//   //       .get(`https://api.themoviedb.org/3/movie/${id}?api_key=eb2ea9d1a56bfee6c00b801429fd0d16`)
//   //       .then((res) => {
//   //         setMovie(res.data);
//   //         setLoading(false);
//   //       })
//   //       .catch(() => setLoading(false));
//   //   }, [id]);

//   useEffect(() => {
//     // axiosInstance
//     axios
//       .get(`https://api.themoviedb.org/3/movie/${id}?api_key=eb2ea9d1a56bfee6c00b801429fd0d16`)
//       .then((res) => {
//         console.log("qqqqqqqqqqqqqqqqqqqqqq",res);

//         setMovie(res.data);
//         // setLoading(false);
//       });
//   }, [id]);

//   // if (!movie) return <p className="text-center mt-5">No Movie...</p>;

//   // if (loading) return <p className="text-center mt-5">Loading...</p>;
//   // if (!movie) return <p className="text-center mt-5">No Movie...</p>;

//   return (
//     <Container className="my-5 w-25">
//       <Card>
//         <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
//         <Card.Body>
//           <Card.Title>{movie.title}</Card.Title>
//           <Card.Text>{movie.overview}</Card.Text>
//           <p>Release Date: {movie.release_date}</p>
//           <p>Rating: {movie.vote_average}</p>
//         </Card.Body>
//       </Card>
//     </Container>
//   );
// }


// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// // import axios from "axios";
// import axiosInstance from "../../axiosInstance/instance";
// import { Container, Card,Spinner } from "react-bootstrap";

// export default function MovieDetails() {
//   const { id } = useParams();
//   const [movie, setMovie] = useState(); 

//   useEffect(() => {
//     // axios
//     axiosInstance
//       // .get(`https://api.themoviedb.org/3/movie/${id}?api_key=eb2ea9d1a56bfee6c00b801429fd0d16`)
//       // .get(`https://api.themoviedb.org/3/movie/${id}?api_key=eb2ea9d1a56bfee6c00b801429fd0d16`)
//       // .get(`/movie/${id}`, { params: { api_key: "eb2ea9d1a56bfee6c00b801429fd0d16" } })
//       .get(`/movie/${id}?api_key=eb2ea9d1a56bfee6c00b801429fd0d16`)
//       .then((res) => {
//         console.log(res);
//         setMovie(res.data);
//       })
//       .catch((err) => {
//         console.error("Error fetching movie details", err);
//       });
//   }, [id]);


//   // if (!movie) {
//   //   return (
//   //       <p>Loading Movie...</p>
//   //   );
//   // }

//    if (!movie) {
//     return (
//       <Container className="text-center my-5">
//         <Spinner animation="grow" variant="primary" />
//         <p>Loading Movie...</p>
//       </Container>
//     );
//   }

//*! 2

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axiosInstance from "../../axiosInstance/instance";
// import { Container, Card, Spinner } from "react-bootstrap";

// export default function MovieDetails() {
//   const { id } = useParams();
//   const [movie, setMovie] = useState(null);

//   useEffect(() => {
//     axiosInstance
//       .get(`/movie/${id}?api_key=eb2ea9d1a56bfee6c00b801429fd0d16`)
//       .then((res) => {
//         console.log(res);
//         setMovie(res.data);
//       })
//       .catch((err) => {
//         console.error("Error fetching movie details", err);
//       });
//   }, [id]);

//   if (!movie) {
//     return (
//       <Container className="text-center my-5">
//         <Spinner animation="grow" variant="primary" />
//         <p>Loading Movie...</p>
//       </Container>
//     );
//   }

//   // ✅ توليد رابط الصورة
//   const posterUrl = movie.poster_path
//     ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
//     : 'https://placehold.co/500x750/333333/FFFFFF?text=No+Image';

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-900 p-4 sm:p-6 lg:p-8 font-inter">
//       <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-xl shadow-2xl overflow-hidden
//                       max-w-4xl w-full flex flex-col md:flex-row transform transition-all duration-300 hover:scale-[1.01]
//                       border border-purple-700">

//         <div className="md:w-1/3 flex-shrink-0">
//           <img
//             src={posterUrl}
//             alt={movie.title}
//             className="w-full h-full object-cover rounded-t-xl md:rounded-l-xl md:rounded-t-none group-hover:opacity-90 transition duration-300 ease-in-out"
//             onError={(e) => {
//               e.target.onerror = null;
//               e.target.src = 'https://placehold.co/500x750/333333/FFFFFF?text=No+Image';
//             }}
//           />
//         </div>

//         <div className="md:w-2/3 p-6 sm:p-8 flex flex-col justify-between">
//           <div>
//             <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-yellow-400 leading-tight">
//               {movie.title}
//             </h1>

//             <p className="text-gray-300 text-base sm:text-lg mb-6 leading-relaxed">
//               {movie.overview}
//             </p>

//             <div className="space-y-3 mb-8">
//               <p className="text-lg flex items-center">
//                 <span className="font-semibold text-purple-300 mr-2">Release Date:</span>
//                 <span className="text-gray-200">{movie.release_date}</span>
//               </p>
//               <p className="text-lg flex items-center">
//                 <span className="font-semibold text-purple-300 mr-2">Rating:</span>
//                 <span className="text-yellow-400 font-bold flex items-center">
//                   {movie.vote_average} <span className="ml-1 text-gray-400 text-sm">/ 10</span>
//                   <span className="ml-2 text-yellow-400">★</span>
//                 </span>
//               </p>
//               <p className="text-lg flex items-center">
//                 <span className="font-semibold text-purple-300 mr-2">Category:</span>
//                 <span className="text-gray-200">{movie.category || "Unknown"}</span>
//               </p>
//             </div>
//           </div>

//           {/* أزرار العمليات */}
//           <div className="flex flex-wrap gap-4 mt-6">
//             <button className="bg-yellow-500 text-gray-900 font-bold py-3 px-6 rounded-full shadow-lg
//                                 hover:bg-yellow-400 transform hover:scale-105 transition duration-300 ease-in-out
//                                 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-gray-900">
//               Watch Now
//             </button>
//             <button className="bg-transparent border border-white text-white font-bold py-3 px-6 rounded-full shadow-lg
//                                 hover:bg-white hover:text-gray-900 transform hover:scale-105 transition duration-300 ease-in-out
//                                 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900">
//               Add to Watchlist
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

//*! 


import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../axiosInstance/instance";
import { Container, Card, Spinner } from "react-bootstrap";
import MovieDetailsLoader from "./MovieDetailsLoader";


export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axiosInstance
      .get(`/movie/${id}?api_key=cc1cc055a5764521b82721365c618474`)
      .then((res) => {
        console.log(res);
        setMovie(res.data);
        setLoading(false);
      })
      .catch((err) => {
      setError("Not Found !");
      setLoading(false);
      });
  }, [id]);

  // if (!movie) {
  //   return (
  //     <Container className="text-center">
  //       <Spinner animation="grow" variant="primary" />
  //       {/* <p>Loading Movie...</p> */}
  //       <MovieDetailsLoader />
  //     </Container>
  //   );
  // }

  if (loading) return <MovieDetailsLoader />;
  if (error) return (
    // <div className="flex items-center justify-center min-h-screen bg-gray-900 text-yellow-400 text-6xl font-bold overflow-hidden">
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gray-900 text-yellow-400 text-6xl font-bold">
  
    {error}
    </div>
  );


  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : 'https://placehold.co/500x750/333333/FFFFFF?text=No+Image';

  const genresMap = {
    1: "dddd",
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    18: "Drama",
    // ... كمل باقي الأنواع حسب اللي بتستخدمه
  };

  // Placeholder data for additional sections
  const reviews = [
    { id: 1, author: "FilmCritic23", rating: 9, text: "Absolutely breathtaking! The visuals were stunning and the story kept me on the edge of my seat. A true cinematic triumph.", date: "2023-11-01" },
    { id: 2, author: "MovieLover123", rating: 8, text: "A fantastic film with a compelling plot and memorable characters. Highly recommend it to anyone looking for a great adventure and engaging narrative.", date: "2023-11-05" },
    { id: 3, author: "CinephileX", rating: 7, text: "Good movie, but some pacing issues in the middle. The ending felt a bit rushed. Overall enjoyable, but not perfect.", date: "2023-11-10" },
  ];

  const cast = [
    { id: 1, name: "Actor One", character: "Lead Hero (Aaric)", image: "https://placehold.co/150x150/222222/EEEEEE?text=Actor1" },
    { id: 2, name: "Actress Two", character: "Heroine (Lyra)", image: "https://placehold.co/150x150/222222/EEEEEE?text=Actress2" },
    { id: 3, name: "Actor Three", character: "Villain (Malakor)", image: "https://placehold.co/150x150/222222/EEEEEE?text=Actor3" },
    { id: 4, name: "Actress Four", character: "Supporting Role (Elara)", image: "https://placehold.co/150x150/222222/EEEEEE?text=Actress4" },
    { id: 5, name: "Actor Five", character: "Mentor (Old Sage)", image: "https://placehold.co/150x150/222222/EEEEEE?text=Actor5" },
  ];

  const similarMovies = [
    { id: 101, title: "Quest for the Lost City", poster_path: "/placeholder-similar-1.jpg" },
    { id: 102, title: "Legend of the Dragon's Breath", poster_path: "/placeholder-similar-2.jpg" },
    { id: 103, title: "The Cosmic Voyager", poster_path: "/placeholder-similar-3.jpg" },
    { id: 104, title: "Guardians of the Nexus", poster_path: "/placeholder-similar-4.jpg" },
    { id: 105, title: "Journey to the Obsidian Peaks", poster_path: "/placeholder-similar-5.jpg" },
    { id: 106, title: "Whispers of the Ancient World", poster_path: "/placeholder-similar-6.jpg" },
  ];

  // Base URL for movie posters (adjust if you have a different source)
  // const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
  const similarMoviePlaceholder = (width, height) => `https://placehold.co/${width}x${height}/444444/FFFFFF?text=No+Image`;

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 p-4 sm:p-6 lg:p-8 font-inter text-white">

      {/* Main Movie Details Card - Hero Section */}
      <div className="bg-gradient-to-br from-gray-800 to-gray-950 text-white rounded-xl shadow-2xl overflow-hidden
                  max-w-5xl w-full flex flex-col md:flex-row transform transition-all duration-300 hover:scale-[1.01]
                  border border-purple-700 mb-12"> {/* Added margin-bottom */}

        {/* Movie Poster Section */}
        <div className="md:w-1/3 flex-shrink-0">
          <img
            src={posterUrl}
            alt={movie.title}
            className="w-full h-full object-cover rounded-t-xl md:rounded-l-xl md:rounded-t-none group-hover:opacity-90 transition duration-300 ease-in-out"
            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/500x750/333333/FFFFFF?text=No+Image'; }}
          />
        </div>

        {/* Movie Details Content */}
        <div className="md:w-2/3 p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-yellow-400 leading-tight">
              {movie.title}
            </h1>
            <p className="text-gray-300 text-base sm:text-lg mb-6 leading-relaxed">
              {movie.overview}
            </p>
            <div className="space-y-3 mb-8">
              <p className="text-lg flex items-center">
                <span className="font-semibold text-purple-300 mr-2">Release Date:</span>
                <span className="text-gray-200">{movie.release_date}</span>
              </p>
              <p className="text-lg flex items-center">
                <span className="font-semibold text-purple-300 mr-2">Rating:</span>
                <span className="text-yellow-400 font-bold flex items-center">
                  {movie.vote_average.toFixed(1)} <span className="ml-1 text-gray-400 text-sm">/ 10</span>
                  <span className="ml-2 text-yellow-400">★</span>
                </span>
              </p>
              <p className="text-lg flex items-center">
                <span className="font-semibold text-purple-300 mr-2">Category:  {genresMap[movie.genre_ids?.[1]] || "Unknown"}
                </span>
                <span className="text-gray-200">{movie.category}</span>
              </p>
            </div>
          </div>

          {/* Watch & Download Buttons */}
          <div className="flex flex-wrap gap-4 mt-6">
            <button className="bg-yellow-500 text-gray-900 font-bold py-3 px-6 rounded-full shadow-lg
                                hover:bg-yellow-400 transform hover:scale-105 transition duration-300 ease-in-out
                                focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-gray-900 cursor-pointer">
              <span className="mr-2">▶️</span> Watch Now
            </button>
            <button className="bg-transparent border border-white text-white font-bold py-3 px-6 rounded-full shadow-lg
                                hover:bg-white hover:text-gray-900 transform hover:scale-105 transition duration-300 ease-in-out
                                focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 cursor-pointer">
              <span className="mr-2">⬇️</span> Download
            </button>
          </div>
        </div>
      </div>

      {/* Next Episodes Section (Conditional for TV Series) */}
      {movie.isSeries && (
        <section className="w-full max-w-5xl bg-gray-800 rounded-xl shadow-xl p-6 sm:p-8 mb-12 border border-blue-700">
          <h2 className="text-3xl font-bold text-white mb-6 border-b-2 border-blue-500 pb-2">Next Episodes</h2>
          <div className="text-gray-300 text-lg">
            <p className="mb-2"><span className="font-semibold text-blue-300">Season 1, Episode 8:</span> "The Unseen Threat" - Airing on 2024-07-15</p>
            <p><span className="font-semibold text-blue-300">Synopsis:</span> As the truth unravels, the hero faces a new, insidious enemy from within their ranks, testing their resolve and alliances.</p>
            <button className="mt-6 bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg
                                hover:bg-blue-500 transform hover:scale-105 transition duration-300 ease-in-out
                                focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 cursor-pointer">
              View All Episodes
            </button>
          </div>
        </section>
      )}

      {/* Cast Section */}
      <section className="w-full max-w-5xl bg-gray-800 rounded-xl shadow-xl p-6 sm:p-8 mb-12 border border-teal-700">
        <h2 className="text-3xl font-bold text-white mb-6 border-b-2 border-teal-500 pb-2">Cast</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {cast.map((member) => (
            <div key={member.id} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full object-cover mx-auto mb-3 border-2 border-teal-400 shadow-md"
                onError={(e) => { e.target.onerror = null; e.target.src = similarMoviePlaceholder(150, 150); }}
              />
              <p className="font-semibold text-gray-100">{member.name}</p>
              <p className="text-sm text-gray-400">{member.character}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews Section */}
      <section className="w-full max-w-5xl bg-gray-800 rounded-xl shadow-xl p-6 sm:p-8 mb-12 border border-red-700">
        <h2 className="text-3xl font-bold text-white mb-6 border-b-2 border-red-500 pb-2">Reviews</h2>
        <div className="space-y-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-gray-900 p-5 rounded-lg shadow-inner border border-gray-700">
              <div className="flex items-center mb-3">
                <p className="font-bold text-yellow-400 text-lg mr-3">{review.author}</p>
                <span className="text-white text-lg flex items-center">
                  {review.rating} <span className="ml-1 text-gray-400 text-sm">/ 10</span> <span className="ml-1 text-yellow-400">★</span>
                </span>
                <span className="ml-auto text-sm text-gray-500">{review.date}</span>
              </div>
              <p className="text-gray-300 italic">"{review.text}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* Similar Movies Section */}
      <section className="w-full max-w-5xl bg-gray-800 rounded-xl shadow-xl p-6 sm:p-8 mb-12 border border-orange-700">
        <h2 className="text-3xl font-bold text-white mb-6 border-b-2 border-orange-500 pb-2">Similar Movies</h2>
        <div className="flex overflow-x-auto pb-4 -mx-2 hide-scrollbar cursor-pointer"> {/* Added hide-scrollbar utility */}
          {similarMovies.map((simMovie) => (
            <div key={simMovie.id} className="flex-shrink-0 w-40 sm:w-48 mx-2 bg-gray-900 rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 border border-gray-700">
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : "https://via.placeholder.com/500x750?text=No+Image"
                }
                alt={simMovie.title}
                className="w-full h-auto object-cover rounded-t-lg"
                onError={(e) => { e.target.onerror = null; e.target.src = similarMoviePlaceholder(500, 750); }}
              />
              <p className="text-center text-sm font-semibold text-gray-100 p-2 truncate">
                {simMovie.title}
              </p>
            </div>
          ))}
        </div>
        {/* Custom scrollbar hide for similar movies section */}
        <style>
          {`
          .hide-scrollbar::-webkit-scrollbar {
              display: none;
          }
          .hide-scrollbar {
              -ms-overflow-style: none;  /* IE and Edge */
              scrollbar-width: none;  /* Firefox */
          }
          `}
        </style>
      </section>

    </div>
  );
}
