import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Projects Snapshots</h1>
        <p className="pl-desc">
          The below projects are created using React, HTML, CSS, JavaScript and the main project is MERN Stack.
        </p>
        <p className="pl-desc">
          <b>Click on the below images to see Project.</b>
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;