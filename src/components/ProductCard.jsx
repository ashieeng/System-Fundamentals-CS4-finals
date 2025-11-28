import React from "react";

export default function ProductCard({
  product,
  onChangeQty,
  onAddToCart,
  onOpen,
}) {
  return (
    <div className="bg-white border rounded p-4 shadow flex gap-4">
      <img
        src={product.image}
        className="w-32 h-24 object-cover rounded"
        alt={product.name}
      />

      <div className="flex-1">
        <h3 className="font-semibold">{product.name}</h3>
        <p className="text-sm text-gray-600">
          {product.category} • Rating: {product.rating}
        </p>

        <p className="text-sm mt-2">{product.description}</p>

        <div className="flex items-center gap-2 mt-3">
          <button
            className="px-2 py-1 border rounded"
            onClick={() => onChangeQty(product.id, -1)}
          >
            -
          </button>

          <div className="px-3 py-1 border rounded">{product.quantity}</div>

          <button
            className="px-2 py-1 border rounded"
            onClick={() => onChangeQty(product.id, +1)}
          >
            +
          </button>

          <button
            className="px-3 py-1 bg-blue-600 text-white rounded"
            onClick={() => onAddToCart(product.id)}
          >
            Add to Cart
          </button>

          <button
            className="px-3 py-1 border rounded"
            onClick={() => onOpen(product)}
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
}
