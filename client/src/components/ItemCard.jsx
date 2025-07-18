import React, { useState } from 'react';

const ItemCard = ({ item, onUpdate, onDelete, fetchItems }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: item.name,
    category: item.category,
    quantity: item.quantity,
    restockThreshold: item.restockThreshold,
  });

  const handleDelete = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/items/${item._id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        onDelete(item._id); // Notify parent to remove it
        fetchItems();
      }
    } catch (err) {
      console.error('Delete error:', err);
    }
  };

  const handleUpdate = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/items/${item._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        const updatedItem = await res.json();
        onUpdate(updatedItem);
         // Notify parent with updated item
        setIsEditing(false);
        fetchItems();
      }
    } catch (err) {
      console.error('Update error:', err);
    }
  };

  return (
    <div className="border p-4 shadow rounded mb-3">
      {isEditing ? (
        <>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="text"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          />
          <input
            type="number"
            value={formData.quantity}
            onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
          />
          <input
            type="number"
            value={formData.restockThreshold}
            onChange={(e) => setFormData({ ...formData, restockThreshold: e.target.value })}
          />
          <button onClick={handleUpdate}>💾 Save</button>
          <button onClick={() => setIsEditing(false)}>❌ Cancel</button>
        </>
      ) : (
        <>
          <h3>{item.name}</h3>
          <p>Category: {item.category}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Restock At: {item.restockThreshold}</p>

          <button onClick={() => setIsEditing(true)}>✏️ Edit</button>
          <button onClick={handleDelete}>🗑 Delete</button>
        </>
      )}
    </div>
  );
};

export default ItemCard;


