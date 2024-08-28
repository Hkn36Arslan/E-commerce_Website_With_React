import React from "react";

import Blogs from "../Components/Blogs/Blogs";
import Footer from "../Components/Layout/Footer/Footer";
import Header from "../Components/Layout/Header/Header";

const BlogPage = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="blog-page">
        <Blogs />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default BlogPage;
