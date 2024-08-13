import { Fragment } from "react";
import Header from "../Components/Layout/Header/Header";
import Categories from "../Components/Categories/Categories";
import Policy from "../Components/Layout/Policy/Policy";
import Footer from "../Components/Layout/Footer/Footer";
import Product from "../Components/Product/Products";
import CampaingSingle from "../Components/CampaingSingle/CampaingSingle";

const ShopPage = () => {
  return (
    <Fragment>
      <Header />
      <Categories />
      <Product/>
      <CampaingSingle/>
      <Product/>
      <Policy />
      <Footer />
    </Fragment>
  );
};

export default ShopPage;
