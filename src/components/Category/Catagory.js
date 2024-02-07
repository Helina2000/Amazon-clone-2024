import React from "react";
import {CategoryInfos} from "./CategoryInfos";
import CatagoryCard from "./CatagoryCard";
import classes from './catagory.module.css'

const Catagory = () => {
  return (
    <section className={classes.category_container}>
      {CategoryInfos.map((infos,i) => (
        <CatagoryCard key={i} data={infos} />
      ))} 
    </section>
  );
};

export default Catagory;
