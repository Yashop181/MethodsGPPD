import React, { useState } from 'react';
import axios from 'axios';

const ItemForm = ({ fetchItems }) => {
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/items', { name });
      console.log(response.data);
      setName('');
      fetchItems();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Item Name" 
      />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default ItemForm;
