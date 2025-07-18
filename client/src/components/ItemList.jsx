import React from 'react';
import ItemCard from './ItemCard';

function ItemList({ items, onDelete, onUpdate, fetchItems }) {
  return (
    <div>
      {items.map(item => (
        <ItemCard key={item._id} item={item} onDelete={onDelete} onUpdate={onUpdate} fetchItems={fetchItems} />
      ))}
    </div>
  );
}

export default ItemList;
