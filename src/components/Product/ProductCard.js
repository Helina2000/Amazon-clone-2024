import React, { useContext } from "react";
import { Rating } from "@mui/material";
import classes from "./product.module.css";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import { Type } from "../../pages/Utility/action.type";



const ProductCard = ({ product, flex, renderDesc, renderAdd }) => {

  const { image, id, title, rating, price, description } = product;

  const [state, dispatch] = useContext(DataContext);

    const addToCart = () => {
      dispatch({
        type: Type.ADD_TO_BASKET,
        item: {
          image,
          id,
          title,
          rating,
          price,
          description,
        },
      });
    };

  return (
    <div
      className={`${classes.card_container} ${
        flex?classes.product_flexed : ""
      }`}
    >
      <Link to={`/products/${id}`}>
        <img src={image} className={classes.img_container} />
      </Link>
      <div>
        <h3>{title}</h3>
        {renderDesc && <div style={{ maxWidth: "750px" }}>{description}
        </div>}
        <div className={classes.rating}>
          <Rating value={rating?.rate} precision={0.1} />
          <small>{rating?.count}</small>
        </div>
        <div><CurrencyFormat amount={price} /></div>
        {renderAdd && (
          <button className={classes.button} onClick={addToCart}>
            add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;

