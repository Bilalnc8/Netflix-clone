import React from 'react'

const MoreInfo = ({movie, movieArray, url}) => {

  const [history, setHistory] = useState([])

  return (
    <div className='moreInfo'> 
    // map
    then indivually call things and then append id into the hsitory state<img  src={`${url}${movieArray[movie].backdrop_path}`} />
    
    </div>
  )
}

export default MoreInfo