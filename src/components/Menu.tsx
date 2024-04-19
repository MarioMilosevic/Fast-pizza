import { useState, useEffect } from "react";
import { url } from "../utils/constants";
import { fetchResponse, PizzaItem } from "../utils/types";
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
          const {data} = responseData
        setPizzas(data);
      } catch (error) {
        console.error("Error failed to fetch data");
      }
    };
    fetchData();
  }, []);

    return <main>
        {pizzas.map(pizza => {
            return <div>{ pizza.name}</div>
      })}
  </main>;
};

export default Menu;
