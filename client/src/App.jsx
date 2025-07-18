import React, { useEffect, useState } from 'react';
import { getItems, deleteItem, updateItem  } from './components/services/itemServices';
import ItemList from './components/ItemList';
import ItemForm from './components/ItemForm';

function App() {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const res = await getItems();
    setItems(res.data);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      <h1>SmartShelf Inventory Tracker</h1>
      <ItemForm onItemAdded={fetchItems} />
      <ItemList items={items}
      onDelete={deleteItem}
      onUpdate={updateItem}
      fetchItems={fetchItems}
      />
    </div>
  );
}

export default App;

