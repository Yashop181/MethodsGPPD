import React, { useState } from 'react';
import axios from 'axios';

const Item = ({ item, fetchItems }) => {
  // Declare state variables unconditionally
  const [editing, setEditing] = useState(false);
  const [editName, setEditName] = useState(item ? item.name : '');

  const startEditing = () => {
    setEditing(true);
  };

  const cancelEditing = () => {
    setEditing(false);
    setEditName(item.name);
  };

  const updateItem = async () => {
    try {
      await axios.put(`http://localhost:5000/items/${item._id}`, { name: editName });
      setEditing(false);
      fetchItems();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteItem = async () => {
    try {
      await axios.delete(`http://localhost:5000/items/${item._id}`);
      fetchItems();
    } catch (error) {
      console.error(error);
    }
  };

  // Render the component conditionally
  if (!item) {
    return null; // Return null or a loading indicator if item is undefined
  }

  return (
    <li>
      {editing ? (
        <>
          <input 
            type="text" 
            value={editName} 
            onChange={(e) => setEditName(e.target.value)} 
          />
          <button onClick={updateItem}>Save</button>
          <button onClick={cancelEditing}>Cancel</button>
        </>
      ) : (
        <>
          {item.name}
          <button onClick={startEditing}>Edit</button>
          <button onClick={deleteItem}>Delete</button>
        </>
      )}
    </li>
  );
};

export default Item;
