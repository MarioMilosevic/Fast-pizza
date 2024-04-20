import { useState, useEffect } from "react";
import { url } from "../utils/constants";
import { PizzaType } from "../utils/types";
import { useDispatch } from "react-redux";
import { setLoading } from "../redux/features/loadingSlice";
import Pizza from "./Pizza";
const Menu = () => {
  const [pizzas, setPizzas] = useState<PizzaType[]>([]);
  
  // treba mi stejt za cart pica, da ima add da ima delete, ako je duzina ovog carta veca od 0 da se dolje pojavi onaj div
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url("menu"));
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const responseData = await response.json();
        const { data } = responseData;
        setPizzas(data);
        dispatch(setLoading(false));
      } catch (error) {
        console.error("Error failed to fetch data");
      }
    };
    fetchData();
  }, [dispatch]);

  return (
    <main className="w-[750px] mx-auto">
      <ul>
        {pizzas.map((pizza) => (
          <Pizza key={pizza.id} {...pizza} />
        ))}
      </ul>
    </main>
  );
};

export default Menu;
