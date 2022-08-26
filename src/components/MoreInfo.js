import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars-2';
import { useState, useEffect } from 'react';

const MoreInfo = ({movie, movieArray, url}) => {

  const [history, setHistory] = useState([])
  // map
  // then indivually call things and then append id into the hsitory state

  return (
    <div className='moreInfo'>
    <Scrollbars style={{ width: 1000, height: 800 }}>
     <div>
    <img  src={`${url}${movieArray[movie].backdrop_path}`} />
    </div>
    </Scrollbars> 
    </div>
  )
}

export default MoreInfo