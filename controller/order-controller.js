import Orders from "../model/orderSchema.js";

export const placeOrders = async (request, response) => {
  try {
    const order = request.body;
    const newOrders = new Orders(order);
    await newOrders.save();

    response.status(200).json({ message: order });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

export const getOrders = async (request, response) => {
  try {
    const placedOrders = await Orders.find({});
    response.status(200).json(placedOrders);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};
