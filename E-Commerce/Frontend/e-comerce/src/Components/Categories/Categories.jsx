import "./Categories.css";
import CategoriItems from "./CategoriItems";

const Categories = () => {
  return (
    <section className="categories">
      <div className="container">
        <div className="section-title">
          <h2>All Categories</h2>
          <p>Summer Collection New Morden Design</p>
        </div>
        <ul className="category-list">
          <li className="category-item">
            <a href="#">
              <img
                src="img/categories/categories1.png"
                alt=""
                className="category-image"
              />
              <span className="category-title">Smartphone</span>
            </a>
          </li>
          <CategoriItems/>
            <a href="#">
              <img
                src="img/categories/categories6.png"
                alt=""
                className="category-image"
              />
              <span className="category-title"> Fashion </span>
            </a>
        </ul>
      </div>
    </section>
  );
};

export default Categories;
