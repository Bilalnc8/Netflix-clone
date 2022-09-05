import React from 'react'
import 'remixicon/fonts/remixicon.css'
import axios from 'axios';
import { useState, useEffect  } from 'react';
import {AiFillCaretLeft} from "react-icons/ai";
import {MdChevronLeft, MdChevronRight} from "react-icons/md"; 
import MoreInfo from './MoreInfo';
import Modal from 'react-modal'
import { click } from '@testing-library/user-event/dist/click';

Modal.setAppElement('#root')
// use after open
const MovieRows = ({api, sliderId}) => {

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
    let slider = document.getElementById(sliderId)
    slider.scrollLeft = slider.scrollLeft + 500
  }

  const moveLeft = () => {
    let slider = document.getElementById(sliderId)
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


  


  const onSlider = (event, downOrLeave, random) => { 
    console.log(random)
    downOrLeave ? setShowSlider(true): setShowSlider(false)

  }




  return (
    <div>
    
    
    <div className='navBar'>
    NetFlix
   <button> Search </button>
   <button> Logout </button>  
   <button> {clicked} </button>
   
   </div> 
    
  
   <div>  
 
  <div id={sliderId} className='result'  onMouseEnter={event =>{ (onSlider(event, true, event.currentTarget.id
    ))}}  onMouseLeave={event => onSlider(event, false)}>
  <MdChevronLeft size={40} onClick={moveLeft} className='leftButton' style={{visibility: showSlider ? 'visible': 'hidden'}}/> 
  <MdChevronRight size={40} onClick={moveRight} className='RightButton' style={{visibility: showSlider ? 'visible': 'hidden'}}/>
  
   
  {images.map((pics, index) => {

      final.push(pics.poster_path) 
  
      return(
        <img key={index} src={`${url}${pics.poster_path}`} onClick={() => {
          setClicked(true)
          setMoreInfoMovie(index)
          console.log(clicked + " rows")
        }} />
      )
    })}
    </div>

  
  </div> 
  <div>


  </div>
<Modal className='modal' isOpen={clicked} onRequestClose={() => setClicked(false)} preventScroll={true}> 
  <MoreInfo movie={moreInfoMovie} movieArray={images} url={url} click={clicked} close={() => setClicked(!clicked)}/> 
</Modal>
    
    
    </div>
  )
}

export default MovieRows