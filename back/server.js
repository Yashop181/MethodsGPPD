const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());
mongoose.connect('mongodb://127.0.0.1:27017/posttest')




const itemSchema = new mongoose.Schema({
    name: String,
  });
  
  const Item = mongoose.model('Item', itemSchema);



  app.post('/items', async (req, res) => {
    const newItem = new Item(req.body);
    try {
      const savedItem = await newItem.save();
      res.status(201).json(savedItem);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });


  app.get('/items', async (req, res) => {
    try {
      const items = await Item.find();
      res.json(items);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });


  app.put('/items/:id', async (req, res) => {
    try {
      const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(updatedItem);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });


  app.delete('/items/:id', async (req, res) => {
    try {
      await Item.findByIdAndDelete(req.params.id);
      res.json({ message: 'Item deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  // Start Server
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });