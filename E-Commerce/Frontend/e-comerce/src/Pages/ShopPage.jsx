import { Fragment } from "react";
import Categories from "../Components/Categories/Categories";
import Product from "../Components/Product/Products";
import CampaingSingle from "../Components/CampaingSingle/CampaingSingle";

const ShopPage = () => {
  return (
    <Fragment>
      <Categories />
      <Product/>
      <CampaingSingle/>
      <Product/>
    </Fragment>
  );
};

export default ShopPage;
