import './App.css';
import 'remixicon/fonts/remixicon.css'
import axios from 'axios';
import { useState, useEffect  } from 'react';
import {AiFillCaretLeft} from "react-icons/ai";
import {MdChevronLeft, MdChevronRight} from "react-icons/md"; 
import MoreInfo from './components/MoreInfo';
import MovieRows from './components/MovieRows';
import CoverPicture from './components/CoverPicture';




function App() {
  

  

  return (
    <div className="App">

    <CoverPicture />

    Popular Movies
    <MovieRows api={"https://api.themoviedb.org/3/movie/popular?api_key=204359bfca7315f436f5a955973dc3b0&language=en-US&page=1"}/>

    Upcoming Movies 
    <MovieRows api={"https://api.themoviedb.org/3/movie/upcoming?api_key=204359bfca7315f436f5a955973dc3b0&language=en-US&page=1"} />

    </div>
  );
}

export default App;
