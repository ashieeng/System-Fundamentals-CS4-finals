import React from "react";

export default function ProductCard({
  product,
  onChangeQty,
  onAddToCart,
  onOpen,
}) {
  return (
    <div className="bg-white border rounded-lg p-5 shadow-md flex gap-5 items-start">

      {/* PRODUCT IMAGE */}
      <img
        src={`/images/${product.image}`}
        alt={product.name}
        className="w-32 h-32 object-cover rounded-lg shadow"
      />

      {/* PRODUCT DETAILS */}
      <div className="flex-1">
        <h3 className="text-xl font-semibold">{product.name}</h3>

        <p className="text-sm text-gray-500">
          {product.category} • ⭐ {product.rating}
        </p>

        <p className="text-sm mt-2 text-gray-700">{product.description}</p>

        {/* QUANTITY + BUTTONS */}
        <div className="flex items-center gap-3 mt-4">
          <button
            className="px-3 py-1 border rounded hover:bg-gray-100"
            onClick={() => onChangeQty(product.id, -1)}
          >
            -
          </button>

          <div className="px-4 py-1 border rounded bg-gray-50">
            {product.quantity}
          </div>

          <button
            className="px-3 py-1 border rounded hover:bg-gray-100"
            onClick={() => onChangeQty(product.id, +1)}
          >
            +
          </button>

          <button
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={() => onAddToCart(product.id)}
          >
            Add to Cart
          </button>

          <button
            className="px-4 py-2 border rounded hover:bg-gray-100"
            onClick={() => onOpen(product)}
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
}