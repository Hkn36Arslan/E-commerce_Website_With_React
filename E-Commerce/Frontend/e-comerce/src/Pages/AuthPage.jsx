import React from "react";
import Auth from "../Components/Auth/Auth";
import Footer from "../Components/Layout/Footer/Footer";
import Header from "../Components/Layout/Header/Header";


const AuthPage = () => {
  return (
    <React.Fragment>
      <Header />
      <Auth />
      <Footer />
    </React.Fragment>
  );
};

export default AuthPage;
