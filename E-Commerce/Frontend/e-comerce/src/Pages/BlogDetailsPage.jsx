import { Fragment } from "react";
import Header from "../Components/Layout/Header/Header";
import BlogDetails from "../Components/BlogDetails/BlogDetails";
import Footer from "../Components/Layout/Footer/Footer";

const BlogDetailsPage = () => {
  return (
    <Fragment>
      <Header />
      <BlogDetails />
      <Footer />
    </Fragment>
  );
};

export default BlogDetailsPage;