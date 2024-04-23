// https://react-fast-pizza-api.onrender.com/api/order




export const sendData = async (data) => {
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
    console.log("Order submitted successfully");
  } catch (error) {
    console.log("Error submitting order:", error);
  }
};
