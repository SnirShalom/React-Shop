export function Product({ product, addToCartHandler }) {
  return (
    <div className="Product">
      <div>
        <h1>{product.title}</h1>
        <img src={product.image} style={{ width: "100px" }} />
        <p style={{ fontSize: "15px" }}>description {product.description}</p>
        <span>Price: {product.price}</span>
        <span>
          Rate: {product.rating.rate} From {product.rating.count} Users
        </span>
        <button onClick={addToCartHandler}>Add To Cart</button>
      </div>
    </div>
  );
}
