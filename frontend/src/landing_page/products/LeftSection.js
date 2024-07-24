import React from 'react'

const LeftImage = ({imageUrl, productName, productDdiscription, tryDemo, learnMore, googlePlay, appStore}) => {
  return (
    <div className='container'>
      <div className='row mt-3'>
        <div className='col p-5' >
          <img src={imageUrl} style={{width:"90%"}}/>
        </div>
        <div className='col p-5 mt-5' >
          <h1>{productName}</h1>
          <p>{productDdiscription}</p>
          <div className='mb-3 leftImage-links'>
            <a href={tryDemo}>Try Demo <i className='fa fa-long-arrow-right' aria-hidden="true"></i></a>
            <a className='leftImage-a-tag' href={learnMore}>Learn More <i className='fa fa-long-arrow-right' aria-hidden="true"></i></a>
          </div>
          <div className=''>
            <a href={googlePlay}><img src='media\images\google-play-badge.svg'/></a>
            <a className='leftImage-pay-links' href={appStore}><img src='media\images\appstore-badge.svg'/></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftImage