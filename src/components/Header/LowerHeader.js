import React from "react";
import { IoIosMenu } from "react-icons/io";
import classes from "./header.module.css"; 


const LowerHeader = () => {
  return (
    <div className={classes.lower_container}>
      <ul>
        <li>
          <IoIosMenu />
          <p>All</p>
        </li>
        <li>Todays Deals</li>
        <li>Costumer Service</li>
        <li>Registry</li>
        <li>Gift Cards</li>
        <li>Sell</li>
      </ul>
    </div>
  );
};

export default LowerHeader;
