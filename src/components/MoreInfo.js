import { getByTitle } from '@testing-library/react';
import React from 'react'
import { useState, useEffect } from 'react';
import { AiOutlinePlus, AiOutlineLike, AiOutlineVerticalAlignBottom } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import MoreLike from './MoreLike';



// make the background scroll bar hidden

const MoreInfo = ({movie, movieArray, url}) => {

  const [history, setHistory] = useState([])
  const style = { color: "white", fontSize: "1.5em" }
  const [top, setTop] = useState(539)
  const scrollSpeed = 15
  var distance = '539px'
  
  // map
  // then indivually call things and then append id into the hsitory state
  
  // <img className='moreInfoImage' src={`${url}${movieArray[movie].backdrop_path}`} /> 

 
  // add play button thing
  

  return (
    <div className='moreInfo' onWheel={ event => {
      if (event.nativeEvent.deltaY > 0) {
        setTop((top) => top - scrollSpeed)
        distance = top + "px"
      } else {
        setTop((top) => top + scrollSpeed)
        
      }
    }}
    > 

      <div className='moreInfoImage' 
    style={{
    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movieArray[movie].backdrop_path}")`,
    backgroundSize: 'cover',
    
  }}> 
  </div>
  
<div className='filte' style={{top: top + 'px'}} > 
<h1 className='movieTitle' >{movieArray[movie].title}</h1>
<div className='release_data'> {movieArray[movie].release_date} </div>
<p> {movieArray[movie].overview} </p>
<p> Cast: Not available </p>
<p> Director: Not available </p>

<div className='icon'> 
  <AiOutlinePlus /> <AiOutlineLike /> <AiOutlineVerticalAlignBottom />


</div>

<MoreLike className='wow' originalMovie={movieArray[movie]} />
</div>  



<div onWheel={ event => {
  console.log(event)
  if (event.nativeEvent.deltaY > 0) {
    console.log('scroll up');
  } else {
    console.log('scroll down');
  }
}}
>
 scroll on me!xednewdnewjdnwejdnwejd
</div>
    </div>
  )
}

export default MoreInfo