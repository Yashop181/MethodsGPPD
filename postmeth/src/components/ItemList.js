import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ItemForm from './ItemForm';
import Item from './Item';

const ItemList = () => {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    try {
      const response = await axios.get('http://localhost:5000/items');
      setItems(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      <ItemForm fetchItems={fetchItems} />
      <ul>
        {items.map(item => (
          <Item key={item._id} item={item} fetchItems={fetchItems} />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
