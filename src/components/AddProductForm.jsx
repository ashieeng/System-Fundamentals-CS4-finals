import React, { useState } from "react";

export default function AddProductForm({ onAdd }) {
  const initial = {
    image: "",
    name: "",
    category: "",
    description: "",
    specification: "",
    rating: "",
    price: "",
    quantity: "",
  };

  const [form, setForm] = useState(initial);

  function handleFile(e) {
    const f = e.target.files?.[0];
    if (!f) return;

    const reader = new FileReader();
    reader.onload = () => setForm((prev) => ({ ...prev, image: reader.result }));
    reader.readAsDataURL(f);
  }

  function submit(e) {
    e.preventDefault();
    const newProduct = {
      id: "p" + Date.now(),
      ...form,
      rating: Number(form.rating),
      price: Number(form.price),
      quantity: Number(form.quantity),
    };
    onAdd(newProduct);
    setForm(initial);
  }

  return (
    <form onSubmit={submit} className="p-4 bg-white border rounded space-y-3">
      <h3 className="font-semibold">Add Product</h3>

      <div>
        <label>Image URL</label>
        <input
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
          className="w-full border px-2 py-1 rounded"
        />

        <input type="file" className="mt-2" accept="image/*" onChange={handleFile} />
      </div>

      <input
        className="w-full border px-2 py-1 rounded"
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        className="w-full border px-2 py-1 rounded"
        placeholder="Category"
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
      />

      <textarea
        className="w-full border px-2 py-1 rounded"
        placeholder="Description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />

      <input
        className="w-full border px-2 py-1 rounded"
        placeholder="Specification"
        value={form.specification}
        onChange={(e) => setForm({ ...form, specification: e.target.value })}
      />

      <input
        className="w-full border px-2 py-1 rounded"
        placeholder="Rating"
        value={form.rating}
        onChange={(e) => setForm({ ...form, rating: e.target.value })}
      />

      <input
        className="w-full border px-2 py-1 rounded"
        placeholder="Price"
        value={form.price}
        onChange={(e) => setForm({ ...form, price: e.target.value })}
      />

      <input
        className="w-full border px-2 py-1 rounded"
        placeholder="Quantity"
        value={form.quantity}
        onChange={(e) => setForm({ ...form, quantity: e.target.value })}
      />

      <button className="bg-green-600 text-white px-4 py-1 rounded">
        Add
      </button>
    </form>
  );
}
