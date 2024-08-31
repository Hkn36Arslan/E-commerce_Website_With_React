import React, { useState } from "react";
import Footer from "../Components/Layout/Footer/Footer";
import Header from "../Components/Layout/Header/Header";
import Proptypes from "prop-types";
import Search from "../Components/Modals/Search/Search";

const MainLayout = ({ children }) => {

  const[isSearchShow,setSearchShow] = useState(false);
  return (
    <React.Fragment>
      <Search isSearchShow={isSearchShow} setSearchShow={setSearchShow} />
      
      <Header setSearchShow={setSearchShow} />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default MainLayout;

MainLayout.propTypes = {
  children: Proptypes.node,
};
