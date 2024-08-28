import React from "react";
import "./App.css";
import CartPage from "./Pages/CartPage";
import BlogDetails from "./Components/BlogDetails/BlogDetails";
import BlogDetailsPage from "./Pages/BlogDetailsPage";
// import AuthPage from "./Pages/AuthPage";
// import ContactPage from "./Pages/ContactPage";
// import HomePage from "./Pages/HomePage";
// import ShopPage from "./Pages/ShopPage";
function App() {
  return (
    <React.Fragment>
      {/* <HomePage/>
      <ShopPage/>
      <ContactPage/>
      <AuthPage/> 
      <CartPage/>
      */
      }
      <BlogDetailsPage/>
    </React.Fragment>
  );
}

export default App;
