import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Movie from './Components/Movie/Movie';
import MovieDetails from './Components/MovieDetails/MovieDetails';
import Login from './Components/Login/Login';
import Favourites from './Components/Favourites/Favourites';
import { Provider } from 'react-redux';
import store from './Store/Store';

// import './styles/tailwind.css';


// import 'bootstrap/dist/css/bootstrap.min.css';

import './myStyle.css'
// import './index.css'


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Provider store={store} >
        <Routes>
          <Route path="/" index element={<Movie />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}


export default App
