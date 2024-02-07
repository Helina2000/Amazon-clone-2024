import React, { useEffect, useState } from 'react'
import ProductCard from "./ProductCard";
import classes from './product.module.css'
import axios from 'axios' 
import Loader from '../Loader/Loader'
import {productUrl} from '../../Api/EndPoints'

const Product = () => {
  const [products,setProducts]=useState()
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
      axios.get(`${productUrl}/products`)
        .then((res) => {
          setProducts(res.data);
          setIsLoading(false);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
},[])

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className={classes.products_container}>
          {products?.map((singleProduct) => {
            return (
              <ProductCard
                renderAdd={true}
                product={singleProduct}
                key={singleProduct.id}
              />
            );
          })}
        </section>
      )}
    </>
  );
}

export default Product