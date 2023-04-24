import React from "react";
import { Link } from "react-router-dom";

const ProductsPage = () => {
  const PRODUCTS = [
    { id: "p1", title: "Prodoct-1" },
    { id: "p2", title: "Prodoct-2" },
    { id: "p3", title: "Prodoct-3" },
  ];
  return (
    <>
      <h1>The Products Page</h1>
      <ul>
        {PRODUCTS.map((prod) => {
          return (
            <li key={prod.id}>
              <Link to={prod.id}>{prod.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ProductsPage;
