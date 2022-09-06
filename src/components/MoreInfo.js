import { getByTitle } from '@testing-library/react';
import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { AiOutlinePlus, AiOutlineLike, AiOutlineVerticalAlignBottom } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import MoreLike from './MoreLike';
import onClickOutside from 'react-onclickoutside'




// make the background scroll bar hidden

const MoreInfo = ({movie, movieArray, url, close, click}) => {

  const [history, setHistory] = useState([])
  const style = { color: "white", fontSize: "1.5em" }
  const [top, setTop] = useState(539)
  const [topTitle, setTopTitle] = useState(470)
  const scrollSpeed = 15
  var distance = '539px'
  const componentRef = useRef();

  console.log("jedjend")
  
  // map
  
  // then indivually call things and then append id into the hsitory state
  
  // <img className='moreInfoImage' src={`${url}${movieArray[movie].backdrop_path}`} /> 

 
  // add play button thing

  
  
  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
    function handleClick(e) {
        if(componentRef && componentRef.current){
          console.log("hiiii")
            const ref = componentRef.current
            if(!ref.contains(e.target)){
                console.log("more info box was not clicked")
               // console.log(clicked)
                //if(clicked === true){ 
                
               // }
            }
        }
    }
}, []);

  return (
    <div>
    {click ? 
 
      <div className='moreInfo' onWheel={ event => {
        if (event.nativeEvent.deltaY > 0) {
          setTop((top) => top - scrollSpeed)
          setTopTitle((topTitle) => topTitle - scrollSpeed)
          distance = top + "px"
        } else {
          setTop((top) => top + scrollSpeed)
          setTopTitle((topTitle) => topTitle + scrollSpeed)
          
        }
      }}
      ref={componentRef}
    > 

      <div className='moreInfoImage' 
    style={{
    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movieArray[movie].backdrop_path}")`,
    backgroundSize: 'cover',
    
  }}> 
  </div>

<div className='filte' style={{top: top + 'px'}} > 

<div className='release_data'> {movieArray[movie].release_date} </div>

<div className='movieOverview'> {movieArray[movie].overview} </div>
<div className='details'>
<p> Cast: Not available </p>
<p> Director: Not available </p>
</div>

<div className='icon'> 
  <AiOutlinePlus /> <AiOutlineLike /> <AiOutlineVerticalAlignBottom />


</div>

<MoreLike className='wow' originalMovie={movieArray[movie]} />
</div>  
<h1 className='movieTitle' style={{top: topTitle + 'px'}} >{movieArray[movie].title}</h1>


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
     : null }
    </div>
    
  )
}

export default MoreInfo