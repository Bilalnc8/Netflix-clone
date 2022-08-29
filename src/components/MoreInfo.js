import { getByTitle } from '@testing-library/react';
import React from 'react'
import { useState, useEffect } from 'react';


// make the background scroll bar hidden

const MoreInfo = ({movie, movieArray, url}) => {

  const [history, setHistory] = useState([])
  // map
  // then indivually call things and then append id into the hsitory state
  
  // <img className='moreInfoImage' src={`${url}${movieArray[movie].backdrop_path}`} /> 

  console.log(movieArray[0])
  
  

  return (
    <div className='moreInfo' onWheel={ event => {
      console.log(event)
      if (event.nativeEvent.deltaY > 0) {
        console.log('scroll up');
      } else {
        console.log('scroll down');
      }
    }}
    > 

      <div className='moreInfoImage' 
    style={{
    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movieArray[movie].backdrop_path}")`,
    backgroundSize: 'cover',
    
  }}> 
  </div>
  
<div className='filte'> 
<h1 className='movieTitle'>{movieArray[movie].title}</h1>
<div className='release_data'> {movieArray[movie].release_date} </div>
peaky jjjndekdnwedkwendkkdwekdnwekd
dnwkedkwednw
dknwendkwend
dknewdnewkd'
ndekdnwedkwendkkdwekdnwekddnkwdnkw
datadkwndk
dknewdnewkdwd
wed
we
defaultwd
wed
w
ed
wed
d
ewdw
datadqw
d
qdq
dataqwd
qwd
qw
d
qwd
qw
d
qwd
qw
dq
wheelDeltaqwd
qwd
q
wdq
wheelDeltaqwdqd
qwdqwdqwdddddddddddddddddddddddddddddq
wqdwqdDWDD QEWDEFEWF
EWFEWFWEFEWF  FFEWFEWFEWF
EWF EWFEWQFWEQFEQWFWQEFWQEFWEQFWE WEF
WE
FWEFEWFWEFEWFEQWFEFGRQGER</div>  

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