import React from 'react'

const RightImage = ({imageUrl, productName, productDdiscription, learnMore}) => {
  return (
    <div className='container'>
      <div className='row mt-3 p-5'>
        <div className='col p-5 mt-5' >
          <h1>{productName}</h1>
          <p className=''>{productDdiscription}</p>
          <a style={{textDecoration:"none"}} href={learnMore}>Learn More <i className='fa fa-long-arrow-right' aria-hidden="true"></i></a>
          
        </div>
        <div className='col' >
          <img src={imageUrl} style={{width:"100%"}}/>
        </div>
      </div>
    </div>
  )
}

export default RightImage