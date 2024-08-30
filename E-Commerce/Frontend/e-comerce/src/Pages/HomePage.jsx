import React from "react";
import Sliders from "../Components/Slider/Sliders";
import Categories from "../Components/Categories/Categories";
import Product from "../Components/Product/Products";
import Campaigns from "../Components/Campaigns/Campaigns";
import Blogs from "../Components/Blogs/Blogs";
import Brands from "../Components/Brands/Brands";
import CampaingSingle from "../Components/CampaingSingle/CampaingSingle";

const HomePage = () => {
  return (
    <React.Fragment>
      <Sliders />
      <Categories />
      <Product />
      <Campaigns />
      <Product />
      <Blogs />
      <Brands />
      <CampaingSingle />
    </React.Fragment>
  );
};

export default HomePage;
