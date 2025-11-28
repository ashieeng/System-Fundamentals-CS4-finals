import React from "react";
import ProductCard from "../components/ProductCard";

export default function Home({ products, setProducts, setSelected }) {
  function changeQty(id, d) {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, quantity: Math.max(0, p.quantity + d) } : p
      )
    );
  }

  function addToCart(id) {
    changeQty(id, 1);
  }

  return (
    <div className="space-y-4">
      {products.map((p) => (
        <ProductCard
          key={p.id}
          product={p}
          onChangeQty={changeQty}
          onAddToCart={addToCart}
          onOpen={setSelected}
        />
      ))}
    </div>
  );
}
