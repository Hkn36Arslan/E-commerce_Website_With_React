import "./CategoriItem.css"

const CategoriItems = () => {
  return (
    <li className="category-item">
        <a href="#">
        <img
            src="img/categories/categories2.png"
            alt=""
            className="category-image"
        />
        <span className="category-title"> Watches </span>
        </a>
    </li>
  )
}

export default CategoriItems