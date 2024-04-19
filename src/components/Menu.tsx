import { useState, useEffect } from "react";
import { url } from "../utils/constants";
import { PizzaItem } from "../utils/types";
import Pizza from "./Pizza";
const Menu = () => {
  const [pizzas, setPizzas] = useState<PizzaItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url("menu"));
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const responseData = await response.json();
        console.log(responseData);
        const { data } = responseData;
        setPizzas(data);
      } catch (error) {
        console.error("Error failed to fetch data");
      }
    };
    fetchData();
  }, []);

  return (
    <ul>
          {pizzas.map(pizza => <Pizza key={pizza.id} {...pizza} />) }
    </ul>
  );
};

export default Menu;
