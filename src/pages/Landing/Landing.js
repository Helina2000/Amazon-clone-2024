import React from 'react'
import CarouselEffect from '../../components/Carousel/CarouselEffect';
import Catagory from '../../components/Category/Catagory';
import LayOut from '../../components/LayOut/LayOut';
import Product from '../../components/Product/Product' 


const Landing = () => {
  return (
    <LayOut>
      <CarouselEffect />
      <Catagory />
      <Product />
    </LayOut>
  );
}

export default Landing