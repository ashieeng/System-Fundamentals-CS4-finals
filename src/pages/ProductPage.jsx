import React from "react";
import { useParams, Link } from "react-router-dom";

export default function ProductPage({ products }) {
  const { id } = useParams();

  const product = products.find((p) => p.id === id);

  if (!product)
    return (
      <div className="p-4">
        Product not found. <Link to="/">Go Back</Link>
      </div>
    );

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-2xl font-bold">{product.name}</h2>

      <img
        src={product.image}
        className="w-60 h-40 rounded object-cover my-4"
        alt=""
      />

      <p>{product.description}</p>

      <p className="mt-3">
        <strong>Specs:</strong> {product.specification}
      </p>

      <p className="mt-1">Price: ₱{product.price.toLocaleString()}</p>
      <p className="mt-1">Quantity: {product.quantity}</p>

      <Link
        to="/"
        className="inline-block mt-4 px-4 py-1 border rounded"
      >
        Back
      </Link>
    </div>
  );
}
