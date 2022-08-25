import './App.css';
import Background from './components/Background';
import SearchBar from './components/SearchBar';
import 'remixicon/fonts/remixicon.css'
import axios from 'axios';
import { useState, useEffect, useTable } from 'react';
import {AiFillCaretLeft} from "react-icons/ai";
import {MdChevronLeft, MdChevronRight} from "react-icons/md"; 
import MoreInfo from './components/MoreInfo';





function App() {
  

  const [images, setImages] = useState([])
  const [final, setFinal] = useState([])
  const url = 'https://image.tmdb.org/t/p/w200'
  const [coverPicture, setCoverPicture] = useState([]) 
  const [showSlider, setShowSlider] = useState(false)
  const [clicked, setClicked] = useState(false)
  const [random, setRandom] = useState(false)
  
  

  
axios.get("https://api.themoviedb.org/3/movie/popular?api_key=204359bfca7315f436f5a955973dc3b0&language=en-US&page=1")
      //await(response)
  .then(response => {
    setImages(response.data.results.map(movieImage =>{
      return(movieImage)
  
    }))
    
    
  })
  .catch(err => {
    console.error(err);
  });

const calls = () => {

  const randomNumber = Math.floor(Math.random() * 20);

    axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=204359bfca7315f436f5a955973dc3b0&language=en-US&page=1")
        //await(response)
    .then(response => {
      console.log(response.data.results)
      setCoverPicture(response.data.results[randomNumber])
      
    })
    .catch(err => {
      console.error(err);
    });
  }
  

  const moveRight = () => {
    let slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft + 500
  }

  const moveLeft = () => {
    let slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft - 500
  }

  const caller = () => {
    console.log("hi")
    return (
      <div>
      ss
      <p>sssssss</p>
      </div>
      )

    
    
  }

  useEffect(() => {
    clicked ?  caller() : setRandom(true)
  }, [clicked]);


  useEffect(() => {
    calls();
  }, []);


  const onSlider = (event, downOrLeave) => {
    downOrLeave ? setShowSlider(true): setShowSlider(false)

  }

  return (
    <div className="App">

   <div className='navBar'>
    NetFlix
   <button> Search </button>
   <button> Logout </button>  
   </div> 


  <header className='coverPicture' 
  style={{
  backgroundPosition: "center center",
  backgroundImage: `url("https://image.tmdb.org/t/p/original/${coverPicture.backdrop_path}")`,
  backgroundSize: 'cover',
}}> 
   
  <div className='coverInfo'> 
    <h1> {coverPicture.title} </h1>
    <button onClick={() => {
      setClicked(!clicked)
      return(<MoreInfo/>)}}> Play </button>
    <button> Add to my list </button>
    <p> {coverPicture.overview} </p>
  </div>

    
  
  </header>
    
  
   <div onMouseEnter={event => onSlider(event, true)}  onMouseLeave={event => onSlider(event, false)}>  
  <MdChevronLeft size={40} onClick={moveLeft} className='leftButton' style={{visibility: showSlider ? 'visible': 'hidden'}}/> 
  <div id='slider' className='result' >

  
   
  {images.map((pics, index) => {

      final.push(pics.poster_path) 
  
      return(
        <img key={index} src={`${url}${pics.poster_path}`} onClick={() => {
          setClicked(!clicked)
          
        }} />
      )
    })}
    </div>

  <MdChevronRight size={40} onClick={moveRight} className='RightButton' style={{visibility: showSlider ? 'visible': 'hidden'}}/>
  </div> 
  <div>

  <img  src='https://image.tmdb.org/t/p/w200/8cXbitsS6dWQ5gfMTZdorpAAzEH.jpg' />

  </div>

  {clicked ?  <MoreInfo /> : null}

    </div>
  );
}

export default App;
