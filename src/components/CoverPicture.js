import React from 'react'
import axios from 'axios';
import { useState, useEffect  } from 'react';

const CoverPicture = () => {

  const [clicked, setClicked] = useState(false)
  const [random, setRandom] = useState(false)
  const [coverPicture, setCoverPicture] = useState([]) 

  useEffect(() => {
    calls();
      }, []);

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
  return (

    <div>
    
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
      }}> Play </button>
    <button> Add to my list </button>
    <p> {coverPicture.overview} </p>
  </div>

    
  
  </header>
    
    
    </div>
  )
}

export default CoverPicture