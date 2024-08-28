import { Fragment } from "react";
import Cart from "../Components/Cart/Cart";

import Footer from "../Components/Layout/Footer/Footer";
import Header from "../Components/Layout/Header/Header";

const CartPage = () => {
  return (
    <Fragment>
      <Header/>
      <Cart />
      <Footer />
    </Fragment>
  );
};

export default CartPage;
