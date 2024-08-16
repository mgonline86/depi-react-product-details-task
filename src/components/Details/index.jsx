import './Details.css';

export default function Details({ product }) {
  return (
    <div className="details flex-1">
      <h1 className="name">{product.name}</h1>
      <p className="price">$ {product.price}</p>
      <div className="sizes">
        <label htmlFor="size">Size:</label>
        <select name="size" id="size">
          {product.sizes.map((size) => (
            <option key={size.value} value={size.value}>
              {size.label}
            </option>
          ))}
        </select>
      </div>
      <p className="description">{product.description}</p>
      <button className="btn btn-primary">Add to cart</button>
    </div>
  );
}
