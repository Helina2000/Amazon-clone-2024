import React, { useEffect, useState } from 'react'
import classes from './productDetail.module.css'
import LayOut from '../../components/LayOut/LayOut'
import { useParams } from "react-router-dom";
import { productUrl } from '../../Api/EndPoints'; 
import axios from 'axios'
import ProductCard from '../../components/Product/ProductCard';
import Loader from '../../components/Loader/Loader'
import product from '../../components/Product/Product'


const ProductDetail = () => {
  const { productId } = useParams();

const [product, setProduct] = useState({})
const [isLoading,setIsLoading]=useState(false)

  useEffect(() => {
    setIsLoading(true)
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        console.log(res)
        setProduct(res.data);
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false)
      });
},[])
console.log(product)
  return (
    <LayOut>
      {isLoading ? (
        <Loader />
      ) : (
        <ProductCard
          product={product}
          flex={true}
          renderDesc={true}
          renderAdd={true}
        />
      )}
    </LayOut>
  );
}

export default ProductDetail