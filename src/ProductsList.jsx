import { Product } from "./Product";

export function ProductsList({ products, addToCartHandler }) {
  return (
    <div className="ProductsList">
      {products.map((product, i) => (
        <Product
          product={product}
          addToCartHandler={() => addToCartHandler(product, i)}
        />
      ))}
    </div>
  );
}
