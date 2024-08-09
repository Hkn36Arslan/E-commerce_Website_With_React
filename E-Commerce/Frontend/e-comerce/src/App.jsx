import "./App.css";
import Categories from "./Components/Categories/Categories";
import Footer from "./Components/Layout/Footer/Footer";
import Header from "./Components/Layout/Header/Header";
import Policy from "./Components/Layout/Policy/Policy";
import Product from "./Components/Product/Products";
import Sliders from "./Components/Slider/Sliders";

function App() {
  return (
    <>
      <Header />
      <Sliders />
      <Categories />
      <Product/>
      <Policy />
      <Footer />
    </>
  );
}

export default App;
