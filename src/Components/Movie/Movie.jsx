// import React, { useEffect, useState } from "react";
// // import axios from "axios";
// import { Card, Button, Row, Col, Container, Form, FormControl } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// // import axiosInstance from '../axiosInstance/instance';
// import axiosInstance from "../../axiosInstance/instance";




// export default function Movie() {

//   const [movies, setMovies] = useState([]);
//   const [search, setSearch] = useState("")  //search
//   const navigate = useNavigate();

//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);


//   const fetchMovies = () => {
//     axiosInstance
//       // .get("https://api.themoviedb.org/3/trending/all/week?api_key=eb2ea9d1a56bfee6c00b801429fd0d16")
//       // .get("trending/all/week", { params: { api_key: "eb2ea9d1a56bfee6c00b801429fd0d16" }})
//       // .get("trending/all/week", { params: { api_key: "eb2ea9d1a56bfee6c00b801429fd0d16" }  })
//       .get(`trending/all/week?api_key=eb2ea9d1a56bfee6c00b801429fd0d16&page=${page}`)
//       .then((res) => {
//         setMovies(res.data.results);
//         // setTotalPages(res.data.total_pages)
//         setTotalPages(res.data.total_pages);

//       }).catch((err) => {
//         alert("Error", err)
//       })
//   };

//   const handleViewDetails = (id) => {
//     navigate(`/movie/${id}`);
//   }


//   // Search 

//   const fetchSearch = (query) => {
//     axiosInstance
//       // .get("search/movie", {params: { api_key: "eb2ea9d1a56bfee6c00b801429fd0d16", query }})
//       // .get(`search/movie?api_key=eb2ea9d1a56bfee6c00b801429fd0d16${query}`)
//       .get(`search/movie?api_key=eb2ea9d1a56bfee6c00b801429fd0d16&query=${query}&page=${page}`)

//       .then((res) => {
//         setMovies(res.data.results);
//         // setTotalPages(res.data.total_pages)
//         setTotalPages(res.data.total_pages);


//       })
//       .catch((err) => alert("Error", err));
//   };


//   //  const fetchBySearch = (query) => {
//   //   axiosInstance
//   //     .get("search/movie", {
//   //       params: { api_key: "eb2ea9d1a56bfee6c00b801429fd0d16", query }
//   //     })
//   //     .then((res) => setMovies(res.data.results))
//   //     .catch((err) => alert("Error", err));
//   // };

//   //  const fetchTrending = () => {
//   //   axiosInstance
//   //     .get("trending/all/week", {
//   //       params: { api_key: "eb2ea9d1a56bfee6c00b801429fd0d16" }
//   //     })
//   //     .then((res) => setMovies(res.data.results))
//   //     .catch((err) => alert("Error", err));
//   // };

//   useEffect(() => {
//     if (search.trim() === "") {
//       console.log("errror");
//       fetchMovies();

//     } else {
//       fetchSearch(search);
//     }
//   }, [search, page]);



//   return (
//     <>
//       <Container className="my-5">
//         <h2 className="mb-4 text-center"> Movies</h2>
//         <Form className="mb-4">
//           <FormControl type="text"
//             placeholder="Enter Movie Name"
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}>

//           </FormControl>

//         </Form>
//         <Row>
//           {movies.map((movie) => (
//             <Col md={4} lg={3} sm={6} key={movie.id} className="mb-4">
//               <Card className="h-100 shadow-sm">
//                 <Card.Img
//                   variant="top"
//                   src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//                   alt={'mss'}
//                 />
//                 <Card.Body>
//                   <Card.Title>{movie.title}</Card.Title>
//                   <Card.Text>
//                     {movie.overview.slice(0, 60)}
//                   </Card.Text>
//                   <Button variant="primary" onClick={() => handleViewDetails(movie.id)}>View Details</Button>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//       {/* <div className="d-flex justify-content-center mt-4 gap-2">
//         <Button
//           disabled={page === 1}
//           onClick={() => setPage((prev) => prev - 1)}
//         >
//           Prev
//         </Button>
//         <span className="align-self-center">Page {page} of {totalPages}</span>
//         <Button
//           disabled={page === totalPages}
//           onClick={() => setPage((prev) => prev + 1)}
//         >
//           Next
//         </Button>
//       </div> */}

//       <div className="flex justify-center items-center mt-6 gap-4">
//   <button
//     className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 disabled:opacity-50"
//     disabled={page === 1}
//     onClick={() => setPage((prev) => prev - 1)}
//   >
//     Prev
//   </button>

//   <span className="text-lg font-medium text-gray-700 dark:text-white">
//     Page {page} of {totalPages}
//   </span>

//   <button
//     className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 disabled:opacity-50"
//     disabled={page === totalPages}
//     onClick={() => setPage((prev) => prev + 1)}
//   >
//     Next
//   </button>
// </div>


//     </>
//   )
// }


// 2

// import React, { useEffect, useState } from "react";
// import { Card, Button, Row, Col, Container, Form } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import axiosInstance from "../../axiosInstance/instance";

// export default function Movie() {
//   const [movies, setMovies] = useState([]);
//   const [search, setSearch] = useState("");
//   const navigate = useNavigate();

//   const fetchTrending = () => {
//     axiosInstance
//       .get("trending/all/week", {
//         params: { api_key: "eb2ea9d1a56bfee6c00b801429fd0d16" }
//       })
//       .then((res) => setMovies(res.data.results))
//       .catch((err) => alert("Error", err));
//   };

//   const fetchBySearch = (query) => {
//     axiosInstance
//       .get("search/movie", {
//         params: { api_key: "eb2ea9d1a56bfee6c00b801429fd0d16", query }
//       })
//       .then((res) => setMovies(res.data.results))
//       .catch((err) => alert("Error", err));
//   };

//   useEffect(() => {
//     if (search.trim() === "") {
//       fetchTrending();
//     } else {
//       fetchBySearch(search);
//     }
//   }, [search]);

//   const handleViewDetails = (id) => {
//     navigate(`/movie/${id}`);
//   };

//   return (
//     <>
//       <Container className="my-5">
//         <h2 className="mb-4 text-center">Movies</h2>
//         <Form className="mb-4">
//           <Form.Control
//             type="text"
//             placeholder="Search movies by name..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//           />
//         </Form>
//         <Row>
//           {movies.map((movie) => (
//             <Col md={4} lg={3} sm={6} key={movie.id} className="mb-4">
//               <Card className="h-100 shadow-sm">
//                 <Card.Img
//                   variant="top"
//                   src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//                   alt={movie.title || "Movie"}
//                 />
//                 <Card.Body>
//                   <Card.Title>{movie.title}</Card.Title>
//                   <Card.Text>
//                     {movie.overview ? movie.overview.slice(0, 60) : ""}
//                   </Card.Text>
//                   <Button variant="primary" onClick={() => handleViewDetails(movie.id)}>
//                     View Details
//                   </Button>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </>
//   );
// }


// 3


// import React, { useEffect, useState } from "react";
// import { Card, Button, Row, Col, Container, Form } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import axiosInstance from "../../axiosInstance/instance";

// export default function Movie() {
//   const [movies, setMovies] = useState([]);
//   const [search, setSearch] = useState("")  //search
//   const navigate = useNavigate();

//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);

//   const fetchTrending = () => {
//     axiosInstance
//       .get("trending/all/week", {
//         params: { api_key: "eb2ea9d1a56bfee6c00b801429fd0d16" }
//       })
//       .then((res) => setMovies(res.data.results))
//       .catch((err) => alert("Error", err));
//   };

//   const fetchBySearch = (query) => {
//     axiosInstance
//       .get("search/movie", {
//         params: { api_key: "eb2ea9d1a56bfee6c00b801429fd0d16", query }
//       })
//       .then((res) => setMovies(res.data.results))
//       .catch((err) => alert("Error", err));
//   };

//   useEffect(() => {
//     if (search.trim() === "") {
//       fetchTrending();
//     } else {
//       fetchBySearch(search);
//     }
//   }, [search]);

//   const handleViewDetails = (id) => {
//     navigate(`/movie/${id}`);
//   };


//   return (
//     <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <h2 className="text-4xl font-extrabold text-center mb-4 text-gray-900 dark:text-white">
//           Trending Movies
//         </h2>

//         {/* Search Input */}
//         <div className="mb-8 max-w-lg mx-auto">
//           <input
//             type="text"
//             placeholder="Enter Movie Name to Search..."
//             value={search}
//             onChange={(e) => {
//               setSearch(e.target.value);
//               setPage(1); // Reset to first page on new search
//             }}
//             className="w-full p-3 text-lg text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
//           />
//         </div>

//         {/* Movies Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
//           {movies.map((movie) => (
//             <div
//               key={movie.id}
//               className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 flex flex-col"
//             >
//               <img
//                 className="w-full h-auto object-cover"
//                 src={
//                   movie.poster_path
//                     ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
//                     : "https://via.placeholder.com/500x750?text=No+Image" // Fallback image
//                 }
//                 alt={movie.title || movie.name}
//               />
//               <div className="">
//                 <p className="text-blue-200">
//                   {movie.rating} ddd
//                 </p>
//               </div>
//               <div className="p-4 flex flex-col flex-grow">
//                 <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
//                   {movie.title || movie.name}
//                 </h3>
//                 {/* <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-grow">
//                   {movie.overview ? `${movie.overview.slice(0, 80)}...` : 'No overview available.'}
//                 </p> */}
//                 <button
//                   onClick={() => handleViewDetails(movie.id)}
//                   className="mt-auto w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
//                 >
//                   View Details
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Pagination Controls */}
//         <div className="flex justify-center items-center mt-10 gap-4">
//           <button
//             className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 disabled:opacity-50 disabled:cursor-not-allowed"
//             disabled={page === 1}
//             onClick={() => setPage((prev) => prev - 1)}
//           >
//             Prev
//           </button>

//           <span className="text-lg font-medium text-gray-700 dark:text-white">
//             Page {page} of {totalPages}
//           </span>

//           <button
//             className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 disabled:opacity-50 disabled:cursor-not-allowed"
//             disabled={page === totalPages}
//             onClick={() => setPage((prev) => prev + 1)}
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }



// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axiosInstance from "../../axiosInstance/instance";
// import MovieCard from "./MovieCard"; // Import the new MovieCard component

// export default function Movie() {
//   const [movies, setMovies] = useState([]);
//   const [search, setSearch] = useState("");
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1); // This state was the problem
//   const navigate = useNavigate();

//   // The logic for fetching movies is now fixed to handle pagination correctly
//   useEffect(() => {
//     // Determine the API endpoint based on whether a search query exists
//     const endpoint =
//       search.trim() === "" ? "trending/all/week" : "search/movie";

//     // Set up the parameters for the API call
//     const params = {
//       api_key: "eb2ea9d1a56bfee6c00b801429fd0d16",
//       page: page, // Send the current page number
//       ...(search.trim() !== "" && { query: search }), // Add query only if searching
//     };

//     axiosInstance
//       .get(endpoint, { params })
//       .then((res) => {
//         setMovies(res.data.results);
//         // *** FIX: Update totalPages state from the API response ***
//         // The TMDB API limits queries to 500 pages, so we cap it here.
//         setTotalPages(Math.min(res.data.total_pages, 399));
//       })
//       .catch((err) => {
//         console.error("Error fetching data:", err);
//         alert("An error occurred while fetching movies.");
//       });
//   }, [search, page]); // Rerun this effect when search or page changes

//   const handleViewDetails = (id) => {
//     navigate(`/movie/${id}`);
//   };

//   return (
//     <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <h2 className="text-4xl font-extrabold text-center mb-4 text-gray-900 dark:text-white">
//           Trending Movies
//         </h2>

//         {/* Search Input */}
//         <div className="mb-8 max-w-lg mx-auto">
//           <input
//             type="text"
//             placeholder="Enter Movie Name to Search..."
//             value={search}
//             onChange={(e) => {
//               setSearch(e.target.value);
//               setPage(1); // Reset to the first page on a new search
//             }}
//             className="w-full p-3 text-lg text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
//           />
//         </div>

//         {/* Movies Grid - Now uses MovieCard */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
//           {movies.map((movie) => (
//             <MovieCard
//               key={movie.id}
//               movie={movie}
//               handleViewDetails={handleViewDetails}
//             />
//           ))}
//         </div>

//         {/* Pagination Controls - These will now work correctly */}
//         <div className="flex justify-center items-center mt-10 gap-4">
//           <button
//             className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
//             disabled={page === 1}
//             onClick={() => setPage((prev) => prev - 1)}
//           >
//             Prev
//           </button>

//           <span className="text-lg font-medium text-gray-700 dark:text-white">
//             Page {page} of {totalPages}
//           </span>

//           <button
//             className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
//             disabled={page === totalPages}
//             onClick={() => setPage((prev) => prev + 1)}
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../axiosInstance/instance";
import MovieCard from "./MovieCard";
import { useLocation } from "react-router-dom";
import MovieCardLoader from "./MovieCardLoader";

export default function Movie() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true); // 1. Added loading state
  const navigate = useNavigate();


  const location = useLocation();
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setSearch(params.get("search") || "");
    setPage(1);
  }, [location.search]);



  useEffect(() => {
    setLoading(true); // Set loading to true when starting a fetch
    const endpoint = search.trim() === "" ? "trending/all/week" : "search/movie";

    const params = {
      api_key: "cc1cc055a5764521b82721365c618474",
      page: page,
      ...(search.trim() !== "" && { query: search }),
    };

    axiosInstance
      .get(endpoint, { params })
      .then((res) => {
        // 2. Added detailed console.log for debugging
        console.log("API Response:", res);

        // 3. Added validation to prevent errors from bad responses
        if (res.data && res.data.results) {
          setMovies(res.data.results);
          // Ensure total_pages is a number before setting it
          const total = res.data.total_pages;
          setTotalPages(total ? Math.min(total, 500) : 1);
        } else {
          // Handle cases where the response is not what we expect
          setMovies([]);
          setTotalPages(1);
        }
      })
      .catch((err) => {
        // 4. Improved error logging
        console.error("Error fetching data from API:", err);
        if (err.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.error("Error Data:", err.response.data);
          console.error("Error Status:", err.response.status);
        } else if (err.request) {
          // The request was made but no response was received
          console.error("No response received:", err.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error("Error Message:", err.message);
        }
        alert("An error occurred. Check the console for details.");
        setMovies([]); // Clear movies on error
        setTotalPages(1); // Reset pages on error
      })
      .finally(() => {
        setLoading(false); // Set loading to false after fetch completes or fails
      });
  }, [search, page]);

  const handleViewDetails = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-4xl font-extrabold text-center mb-4 text-gray-900 dark:text-white">
          Trending Movies
        </h2>


        <div className="mb-8 max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Enter Movie Name to Search..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            className="w-full p-3 text-lg text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          />
        </div>


        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {Array(10)
              .fill(0)
              .map((_, i) => (
                <MovieCardLoader key={i} />
              ))}
          </div>
        ) : movies.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                handleViewDetails={handleViewDetails}
              />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 dark:text-gray-400 text-2xl">
            No movies found. Try a different search.
          </div>
        )}


        {/* Pagination Controls */}
        <div className="flex justify-center items-center mt-10 gap-4">
          <button
            className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={page === 1 || loading}
            onClick={() => setPage((prev) => prev - 1)}
          >
            Prev
          </button>

          <span className="text-lg font-medium text-gray-700 dark:text-white">
            Page {page} of {totalPages}
          </span>

          <button
            className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={page === totalPages || loading}
            onClick={() => setPage((prev) => prev + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}