import React from 'react'

const Universe = () => {
  return (
    <div className='container mt-5'>
      <div className='row text-center mt-5 mb-5'>
        <h2>The Zerodha Universe</h2>
        <p>Extend your trading and investment experience even further with our partner platforms</p>
        <div className='col-lg-4 col-sm-12 p-3 mt-3'>
          <img src='media\images\smallcase-logo.png' />
          <p className='text-small text-muted'>Thematic investment platform</p>
        </div>
        <div className='col-lg-4 col-sm-12 p-3 mt-3'>
          <img src='media\images\streak-logo.png' style={{width:"45%"}}/>
          <p className='text-small text-muted'>Algo & strategy platform</p>
        </div>
        <div className='col-lg-4 col-sm-12 p-3 mt-3'>
          <img src='media\images\sensibull-logo.svg'style={{width:"50%"}} />
          <p className='text-small text-muted'>Options trading platform</p>
        </div>

        <div className='col-lg-4 col-sm-12 p-3 mt-5'>
          <img src='media\images\zerodhafundhouse.png'style={{width:"50%"}} />
          <p className='text-small text-muted'>Thematic investment platform</p>
        </div>
        <div className='col-lg-4 col-sm-12 p-3 mt-5'>
          <img src='media\images\tijori.svg' style={{width:"45%"}}/>
          <p className='text-small text-muted'>Algo & strategy platform</p>
        </div>
        <div className='col-lg-4 col-sm-12 p-3 mt-5'>
          <img src='media\images\ditto-logo.png' style={{width:"40%"}}/>
          <p className='text-small text-muted'>Options trading platform</p>
        </div>
        <button className='hero-btn p-lg-2 btn btn-primary fs-lg-5 p-md-1 mt-5 mb-5'>Sign up now</button>
      </div>
    </div>
  )
}

export default Universe