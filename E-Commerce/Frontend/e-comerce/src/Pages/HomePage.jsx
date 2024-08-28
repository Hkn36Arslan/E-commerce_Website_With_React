import React from "react";
import Header from "../Components/Layout/Header/Header";
import Sliders from "../Components/Slider/Sliders";
import Categories from "../Components/Categories/Categories";
import Product from "../Components/Product/Products";
import Campaigns from "../Components/Campaigns/Campaigns";
import Blogs from "../Components/Blogs/Blogs";
import Brands from "../Components/Brands/Brands";
import CampaingSingle from "../Components/CampaingSingle/CampaingSingle";
import Footer from "../Components/Layout/Footer/Footer";

const HomePage = () => {
  return (
    <React.Fragment>
      <Header/>
      <Sliders />
      <Categories />
      <Product />
      <Campaigns />
      <Product />
      <Blogs />
      <Brands />
      <CampaingSingle />
      <Footer />
    </React.Fragment>
  );
};

export default HomePage;
