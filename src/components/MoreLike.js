import React from 'react'
import { useState } from 'react'

const MoreLike = ({originalMovie}) => {

    const [recommendArray, setRecommendArray] = useState([])
    const [recommendArrayFull, setRecommendArrayFull] = useState(false)

    const AddRecommedation = () => {
        
    }

    recommendArray.length <= 7 ? AddRecommedation : setRecommendArray(true) 

  return (
    <div>MoreLike</div>
  )
}

export default MoreLike