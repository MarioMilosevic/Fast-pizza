// https://react-fast-pizza-api.onrender.com/api/order
import { NewPizzaType } from "./types";
type DataType = {
  customer: string;
  phone: string;
  address: string;
  priority: boolean;
  position: string;
  cart: NewPizzaType[];
};

export const sendData = async (data: DataType) => {
  try {
    const response = await fetch(
      "https://react-fast-pizza-api.onrender.com/api/order",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to submit order");
    }

    const responseData = await response.json();
    console.log("Response data:", responseData);

    console.log("Order submitted successfully");
    return responseData;
  } catch (error) {
    console.log("Error submitting order:", error);
    throw error;
  }
};
