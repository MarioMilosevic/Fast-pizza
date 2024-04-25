import { baseUrl } from "./constants";
import { DataType } from "./types";

export const postData = async (data: DataType) => {
  try {
    const response = await fetch(`${baseUrl}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to submit order");
    }

    const responseData = await response.json();
    console.log("Order submitted successfully");
    return responseData;
  } catch (error) {
    console.log("Error submitting order:", error);
    throw error;
  }
};

export const fetchOrder = async (id: string | undefined) => {
  try {
    const response = await fetch(`${baseUrl}/${id}`);
    if (!response.ok) {
      throw new Error("Failed to send id order");
    }
    const responseData = await response.json();
    console.log("Order submitted successfully");
    return responseData;
  } catch (error) {
    console.log("Error submitting order:", error);
    throw error;
  }
};
