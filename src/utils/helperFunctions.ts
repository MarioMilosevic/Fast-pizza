import { CoordinatesType, NewPizzaType, LocationInfo } from "./types";

export const addNewPizzaFn = (
  pizzaId: number,
  name: string,
  unitPrice: number,
  quantity = 1,
  priority = false
): NewPizzaType => {
  const totalPrice = unitPrice * quantity;
  const newPizza: NewPizzaType = {
    pizzaId,
    name,
    unitPrice,
    quantity,
    totalPrice,
    priority,
  };
  return newPizza;
};

export async function getAddress({ latitude, longitude }: CoordinatesType) {
  const res = await fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`
  );
  if (!res.ok) throw new Error("Failed getting address");

  const data = await res.json();
  return data;
}

export const getUserLocation = async (): Promise<LocationInfo> => {
  if (!navigator.geolocation) {
    throw new Error("Geolocation is not supported by this browser");
  }
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          const { locality, city, countryName } = await getAddress({
            latitude,
            longitude,
          });
          resolve({ locality, city, countryName });
        } catch (error) {
          reject("Error getting user location: ");
        }
      },
      (error) => {
        reject("Error getting user location: " + error.message);
      }
    );
  });
};
