import React from 'react'
import { useState } from 'react'
import axios from 'axios';

const MoreLike = ({originalMovie}) => {

    const [recommendArray, setRecommendArray] = useState([])
    const [recommendArrayFull, setRecommendArrayFull] = useState(false)
    const url = 'https://image.tmdb.org/t/p/w200'

    const AddRecommedation = () => {

    }
        axios.get("https://api.themoviedb.org/3/movie/585511/recommendations?api_key=204359bfca7315f436f5a955973dc3b0&language=en-US&page=1")
        //await(response)
    .then(response => {
        setRecommendArray(response.data.results)
    }

      
    )
    .catch(err => {
      console.error(err);
    });
        

    


  //  recommendArray.length <= 7 ? AddRecommedation : setRecommendArray(true) 

  return (
    <div>
    
    {recommendArray.slice(0,8).map((posters, index) => {
        console.log(posters.backdrop_path)
        return(
          <img key={index} src={`${url}${posters.poster_path}`} />
        )
      })}
    dewdw
    </div>
  )
}

export default MoreLike