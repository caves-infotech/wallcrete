"use client";
import React, { useState } from "react";

const Orders = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      area: "Living Room",
      item: "Sofa",
      specification: "Fabric, 3-Seater",
      size: "6",
      quantity: 1,
      units: "ft",
      rates: 20000,
      amount: 20000,
    },
    {
      id: 2,
      area: "Bedroom",
      item: "Wardrobe",
      specification: "Wooden, Sliding Doors",
      size: "5",
      quantity: 1,
      units: "ft",
      rates: 25000,
      amount: 25000,
    },
    // ... other items
  ]);

  const [editingItem, setEditingItem] = useState(null);
  const [addingItem, setAddingItem] = useState(false);
  const [addItems, setAddItems] = useState(null);
  const [formData, setFormData] = useState({});

  const handleEdit = (item) => {
    setEditingItem(item.id);
    setFormData(item);
  };

  const handleDelete = (id) => {
    const isConfirmed = window.confirm("Do you want to delete?");
    if (isConfirmed) {
      setItems(items.filter((item) => item.id !== id));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      amount: name === "rates" ? value * formData.quantity : formData.amount, // Update amount based on rates
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === editingItem ? { ...formData, id: item.id } : item
      )
    );
    setEditingItem(null);
    setFormData({});
  };

  const handleAddItems = (e) => {
    e.preventDefault();
    const newItem = {
      ...formData,
      id: items.length + 1, // Unique ID for the new item
    };

    // Update the items state
    setItems((prevItems) => [...prevItems, newItem]);

    // Reset form data after adding the item
    setFormData({
      area: "",
      item: "",
      specification: "",
      size: "",
      quantity: 1,
      units: "",
      rates: 0,
      amount: 0,
    });

    setAddingItem(false);
  };

  const handleBlur = () => {
    setAddingItem(false);
  };

  return (
    <section className="h-full mt-4 p-2">
      <div className="flex items-center justify-between">
        <div>
          <input
            placeholder="search"
            className="h-8 border border-gray-300 rounded-md px-2"
          />
        </div>

        <div>
          <button
            className="w-24 border border-gray-300 rounded-md h-8"
            onClick={() => {
              setAddingItem(true);
            }}
            onBlur={handleBlur}
          >
            Add project
          </button>
          <button className="w-24 border border-gray-300 rounded-md ml-2 h-8">
            Actions
          </button>
          <button className="w-24 border border-gray-300 rounded-md ml-2 h-8">
            Filter
          </button>
        </div>
      </div>

      <table className="border border-gray-300 rounded-md w-full my-2">
        <thead>
          <tr className="border-b border-gray-300">
            <th className="border border-gray-300 p-2 text-left">Area</th>
            <th className="border border-gray-300 p-2 text-left">Item</th>
            <th className="border border-gray-300 p-2 text-left">
              Specification
            </th>
            <th className="border border-gray-300 p-2 text-left">Size</th>
            <th className="border border-gray-300 p-2 text-left">Units</th>
            <th className="border border-gray-300 p-2 text-left">Quantity</th>
            <th className="border border-gray-300 p-2 text-left">Rates</th>
            <th className="border border-gray-300 p-2 text-left">Amount</th>
            <th className="border border-gray-300 p-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="border-b border-gray-300">
              <td className="border border-gray-300 p-2">{item.area}</td>
              <td className="border border-gray-300 p-2">{item.item}</td>
              <td className="border border-gray-300 p-2">
                {item.specification}
              </td>
              <td className="border border-gray-300 p-2">{item.size}</td>
              <td className="border border-gray-300 p-2">{item.units}</td>
              <td className="border border-gray-300 p-2">{item.quantity}</td>
              <td className="border border-gray-300 p-2">{item.rates}</td>
              <td className="border border-gray-300 p-2">{item.amount}</td>
              <td className="border border-gray-300 p-2">
                <button
                  className="text-blue-500"
                  onClick={() => handleEdit(item)}
                >
                  Edit
                </button>
                <button
                  className="text-red-500 ml-2"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editingItem &&
        addItems(
          <form onSubmit={handleSubmit} className="mt-4">
            <h3 className="text-lg font-semibold">Edit Item</h3>
            <input
              type="text"
              name="area"
              value={formData.area}
              onChange={handleChange}
              placeholder="Area"
              className="border border-gray-300 rounded-md p-2 mr-2"
            />
            <input
              type="text"
              name="item"
              value={formData.item}
              onChange={handleChange}
              placeholder="Item"
              className="border border-gray-300 rounded-md p-2 mr-2"
            />
            <input
              type="text"
              name="specification"
              value={formData.specification}
              onChange={handleChange}
              placeholder="Specification"
              className="border border-gray-300 rounded-md p-2 mr-2"
            />
            <input
              type="text"
              name="size"
              value={formData.size}
              onChange={handleChange}
              placeholder="Size"
              className="border border-gray-300 rounded-md p-2 mr-2"
            />
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              placeholder="Quantity"
              className="border border-gray-300 rounded-md p-2 mr-2"
            />
            <input
              type="text"
              name="units"
              value={formData.units}
              onChange={handleChange}
              placeholder="Units"
              className="border border-gray-300 rounded-md p-2 mr-2"
            />
            <input
              type="number"
              name="rates"
              value={formData.rates}
              onChange={handleChange}
              placeholder="Rates"
              className="border border-gray-300 rounded-md p-2 mr-2"
            />
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              placeholder="Amount"
              className="border border-gray-300 rounded-md p-2 mr-2"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-md p-2"
            >
              Update
            </button>
          </form>
        )}

      {addingItem && (
        <form onSubmit={handleAddItems} className="mb-4">
          <input
            name="area"
            value={formData.area}
            onChange={handleInputChange}
            placeholder="Area"
            className="h-8 border border-gray-300 rounded-md"
            required
          />
          <input
            name="item"
            value={formData.item}
            onChange={handleInputChange}
            placeholder="Item"
            className="h-8 border border-gray-300 rounded-md ml-2"
            required
          />
          <input
            name="specification"
            value={formData.specification}
            onChange={handleInputChange}
            placeholder="Specification"
            className="h-8 border border-gray-300 rounded-md ml-2"
            required
          />
          <input
            name="size"
            value={formData.size}
            onChange={handleInputChange}
            placeholder="Size"
            className="h-8 border border-gray-300 rounded-md ml-2"
            required
          />
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleInputChange}
            placeholder="Quantity"
            className="h-8 border border-gray-300 rounded-md ml-2"
            min="1"
            required
          />
          <input
            name="units"
            value={formData.units}
            onChange={handleInputChange}
            placeholder="Units"
            className="h-8 border border-gray-300 rounded-md ml-2"
            required
          />
          <input
            type="number"
            name="rates"
            value={formData.rates}
            onChange={handleInputChange}
            placeholder="Rates"
            className="h-8 border border-gray-300 rounded-md ml-2"
            min="0"
            required
          />
          <button
            type="submit"
            className="h-8 border border-gray-300 rounded-md ml-2"
          >
            Add Item
          </button>
        </form>
      )}

      <div className="w-full h-10 border border-gray-300 flex items-center justify-start">
        <button className="w-10 border border-gray-300 rounded-md mx-1 h-8">
          1
        </button>
        <button className="w-10 border border-gray-300 rounded-md mx-1 h-8">
          2
        </button>
        <button className="w-10 border border-gray-300 rounded-md mx-1 h-8">
          3
        </button>
        <button className="w-10 mx-1 h-8 text-2xl">.....</button>
        <button className="w-10 border border-gray-300 rounded-md mx-1 h-8">
          50
        </button>
      </div>
    </section>
  );
};

export default Orders;
