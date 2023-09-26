const Order = require("../models/orders");

// Fetch all orders
const fetchOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.json({ orders });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Fetch a single order by ID
const fetchOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.json({ order });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Fetch all orders for a customer
const fetchCustomerOrders = async (req, res) => {
  try {
    const orders = await Order.find({ customerId: req.params.customerId });
    res.json({ orders });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Create a new order
const createOrder = async (req, res) => {
  try {
    const { orderId, customerId, orderDate, orderTotal } = req.body;
    const order = await Order.create({
      orderId,
      customerId,
      // features,
      orderDate,
      orderTotal,
    });
    res.json({ order });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Update an existing order by ID
const updateOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.json({ order });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete an existing order by ID
const deleteOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.json({ message: "Order deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  fetchOrders,
  fetchCustomerOrders,
  fetchOrder,
  createOrder,
  updateOrder,
  deleteOrder,
};
