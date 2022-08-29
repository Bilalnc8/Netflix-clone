import React from 'react'
import 'remixicon/fonts/remixicon.css'
import axios from 'axios';
import { useState, useEffect  } from 'react';
import {AiFillCaretLeft} from "react-icons/ai";
import {MdChevronLeft, MdChevronRight} from "react-icons/md"; 
import MoreInfo from './MoreInfo';

const MovieRows = ({api}) => {

  const [images, setImages] = useState([])
  const [final, setFinal] = useState([])
  const url = 'https://image.tmdb.org/t/p/w200'
  const [showSlider, setShowSlider] = useState(false)
  const [clicked, setClicked] = useState(false)
  const [random, setRandom] = useState(false)
  const [moreInfoMovie, setMoreInfoMovie] = useState(null)
  
  

  
axios.get(api)
      //await(response)
  .then(response => {
    setImages(response.data.results.map(movieImage =>{
      return(movieImage)
  
    }))
    
    
  })
  .catch(err => {
    console.error(err);
  });


  

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


  


  const onSlider = (event, downOrLeave) => {
    downOrLeave ? setShowSlider(true): setShowSlider(false)

  }




  return (
    <div>
    
    
    <div className='navBar'>
    NetFlix
   <button> Search </button>
   <button> Logout </button>  
   </div> 
    
  
   <div onMouseEnter={event => onSlider(event, true)}  onMouseLeave={event => onSlider(event, false)}>  
  <MdChevronLeft size={40} onClick={moveLeft} className='leftButton' style={{visibility: showSlider ? 'visible': 'hidden'}}/> 
  <MdChevronRight size={40} onClick={moveRight} className='RightButton' style={{visibility: showSlider ? 'visible': 'hidden'}}/>
  <div id='slider' className='result' >

  
   
  {images.map((pics, index) => {

      final.push(pics.poster_path) 
  
      return(
        <img key={index} src={`${url}${pics.poster_path}`} onClick={() => {
          setClicked(!clicked)
          setMoreInfoMovie(index)
        }} />
      )
    })}
    </div>

  
  </div> 
  <div>


  </div>

  {clicked ?  <MoreInfo movie={moreInfoMovie} movieArray={images} url={url}/> : null}

    
    
    </div>
  )
}

export default MovieRows