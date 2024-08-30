import { Fragment } from "react"
import Header from "../Components/Layout/Header/Header"
import Footer from "../Components/Layout/Footer/Footer"
import ProductDetails from "../Components/ProductDetails/ProductDetails"


const ProductDetailPage = () => {
  return (
    <Fragment>
        <Header/>
        <ProductDetails/>
        <Footer/>
    </Fragment>
  )
}

export default ProductDetailPage