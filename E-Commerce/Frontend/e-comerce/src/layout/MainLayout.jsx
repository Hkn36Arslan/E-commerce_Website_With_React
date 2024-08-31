import React, { useState } from "react";
import Footer from "../Components/Layout/Footer/Footer";
import Header from "../Components/Layout/Header/Header";
import Proptypes from "prop-types";
import Search from "../Components/Modals/Search/Search";

const MainLayout = ({ children }) => {
<<<<<<< HEAD
  const[isSearchShow,setSearchShow] = useState(false);
  return (
    <React.Fragment>
      <Search isSearchShow={isSearchShow} setSearchShow={setSearchShow} />
      <Header setSearchShow={setSearchShow} />
=======
  const [isSearchShow, setIsSearchShow] = useState(false);

  return (
    <React.Fragment>
      <Search isSearchShow={isSearchShow} setIsSearchShow={setIsSearchShow} />
      <Header setIsSearchShow={setIsSearchShow} />
>>>>>>> 50b0319e6ba66e981b1733d10facedbc3213df93
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default MainLayout;

MainLayout.propTypes = {
  children: Proptypes.node,
};
