import React from "react";

export default function ProductDetailsModal({ product, onClose }) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white p-4 rounded max-w-xl w-full">
        <h2 className="text-xl font-bold mb-2">{product.name}</h2>

        <img
          src={product.image}
          className="w-60 h-40 object-cover rounded mb-4"
          alt={product.name}
        />

        <p>{product.description}</p>
        <p className="mt-3">
          <strong>Specs:</strong> {product.specification}
        </p>
        <p className="mt-1">Price: ₱{product.price.toLocaleString()}</p>
        <p className="mt-1">Quantity: {product.quantity}</p>

        <div className="mt-4 text-right">
          <button className="px-4 py-1 border rounded" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
