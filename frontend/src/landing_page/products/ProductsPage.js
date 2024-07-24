import React from 'react';
import './product.css';
import Hero from './Hero';
import LeftImage from './LeftSection';
import RightImage from './RightSection';
import Universe from './Universe';

const ProductPage = () => {
  return (
    <div>
      <Hero />
      <LeftImage imageUrl="media\images\products-kite.png" productName="Kite" productDdiscription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." tryDemo="" learnMore="" googlePlay="" appStore=""/>
      <RightImage imageUrl="media\images\products-console.png" productName="Console" productDdiscription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." tryDemo="" learnMore="" googlePlay="" appStore=""/>
      <LeftImage imageUrl="media\images\products-coin.png" productName="Coin" productDdiscription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." tryDemo="" learnMore="" googlePlay="" appStore=""/>
      <RightImage imageUrl="media\images\products-kiteconnect.png" productName="Kite Connect API" productDdiscription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." tryDemo="" learnMore="" googlePlay="" appStore=""/>
      <LeftImage imageUrl="media\images\varsity-products.png" productName="Varsity mobile" productDdiscription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." tryDemo="" learnMore="" googlePlay="" appStore=""/>
      <p className='mt-5 text-center fs-5 text-muted'>Want to know more about our technology stack? Check out the <a style={{textDecoration:"none"}} href=''>Zerodha.tech</a> blog.</p>
      <Universe />
    </div>
  )
}

export default ProductPage