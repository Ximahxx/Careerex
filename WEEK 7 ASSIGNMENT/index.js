const express = require("express");
const mongoose = require("mongoose");
const Item = require("./itemModel");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 4000;

// Connect to MongoDB
const MONGODB_URL =
  "mongodb+srv://Admin:12345@cluster0.rxe8u3h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(MONGODB_URL).then(() => {
  console.log("Mongodb connected...");
  app.listen(PORT, (req, res) => {
    console.log("Server started running on " + PORT);
  });
});

// Add a Found Item
app.post("/", async (req, res) => {
  const newItem = new Item(req.body);
  const savedItem = await newItem.save();
  res.status(201).json(savedItem);
});

// View All Unclaimed Items
app.get("/unclaimed", async (req, res) => {
  const items = await Item.find({ claimed: false });
  res.json(items);
});

// View One Item by ID
app.get("/:id", async (req, res) => {
  const item = await Item.findById(req.params.id);
  if (!item) return res.status(404).json({ message: "Item not found" });
  res.json(item);
});

// Update Item Details or Mark as Claimed
app.put("/:id", async (req, res) => {
  const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!updatedItem) return res.status(404).json({ message: "Item not found" });
  res.json(updatedItem);
});

// Delete Old/Irrelevant Entries
app.delete("/:id", async (req, res) => {
  const deletedItem = await Item.findByIdAndDelete(req.params.id);
  if (!deletedItem) return res.status(404).json({ message: "Item not found" });
  res.json({ message: "Item deleted successfully" });
});
