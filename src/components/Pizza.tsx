import { PizzaItem } from "../utils/types";

const Pizza = ({
  imageUrl,
  name,
  ingredients,
  soldOut,
  unitPrice,
}: PizzaItem) => {
  return (
    <li className="py-2 flex justify-between">
      <div className="flex gap-4">
        <img src={imageUrl} alt={name} className="h-24" />
        <div className="flex flex-col py-2 justify-between">
          <div>
            <h2 className="text-sm font-medium">{name}</h2>
            <div className="flex gap-1">
              {ingredients.map((ingredient: string, index: number) => (
                <p className="capitalize italic text-xs">
                  {index === ingredients.length - 1
                    ? ingredient
                    : `${ingredient}, `}
                </p>
              ))}
            </div>
          </div>
          <p className="text-sm">
            {soldOut ? "SOLD OUT" : `€${unitPrice.toFixed(2)}`}
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-end">
        {!soldOut && (
          <button className="px-2 text-xs uppercase tracking-wide  bg-yellow-400 rounded-full md:px-5 md:py-2.5 transition-colors duration-300 hover:bg-yellow-300 focus:outline-none focus:ring-yellow-300 focus:ring-offset-2">
            Add to Cart
          </button>
        )}
      </div>
    </li>
  );
};

export default Pizza;
