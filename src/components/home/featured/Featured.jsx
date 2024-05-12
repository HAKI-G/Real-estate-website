import React from "react";
import Heading from "../../common/Heading";
import FeaturedCard from "./FeaturedCard";
import "./Featured.css";

const Featured = () => {
  return (
    <section className='featured background'>
      <div className='container'>
        <Heading title='BEST BASKETBALL SHOES' subtitle='AND ONE.' />
        <FeaturedCard />
      </div>
    </section>
  );
};

export default Featured;
