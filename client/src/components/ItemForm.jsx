import React, { useState } from 'react';
import { createItem } from './services/itemServices';

function ItemForm({ onItemAdded }) {
  const [form, setForm] = useState({
    name: '',
    category: '',
    quantity: 0,
    restockThreshold: 1,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createItem(form);
    setForm({ name: '', category: '', quantity: 0, restockThreshold: 1 });
    onItemAdded();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
      <input name="category" value={form.category} onChange={handleChange} placeholder="Category" />
      <input type="number" name="quantity" value={form.quantity} onChange={handleChange} placeholder="Quantity" />
      <input type="number" name="restockThreshold" value={form.restockThreshold} onChange={handleChange} placeholder="Restock Threshold" />
      <button type="submit">Add Item</button>
    </form>
  );
}

export default ItemForm;
