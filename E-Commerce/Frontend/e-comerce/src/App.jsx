import React from "react";
import "./App.css";
import AuthPage from "./Pages/AuthPage";
import ContactPage from "./Pages/ContactPage";
import HomePage from "./Pages/HomePage";
import ShopPage from "./Pages/ShopPage";
function App() {
  return (
    <React.Fragment>
      <HomePage/>
      <ShopPage/>
      <ContactPage/>
      <AuthPage/>
    </React.Fragment>
  );
}

export default App;
