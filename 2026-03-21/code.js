// Topic: MongoDB CRUD Operations

const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: String,
  value: Number
});

const Item = mongoose.model('Item', itemSchema);

async function run() {
  await mongoose.connect('mongodb://localhost/test');
  const newItem = new Item({ name: 'Test Item', value: 100 });
  await newItem.save();
  console.log('Item saved!');
}