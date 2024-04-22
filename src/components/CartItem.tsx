import Button from "./Button";
type CartItemProps = {
    name: string;
    unitPrice: number;
    quantity: number;
}
const CartItem = ({name, unitPrice, quantity}:CartItemProps) => {
  return (
    <article className="flex text-sm justify-between items-center pb-2 border border-b-stone-300">
          <span>{quantity} x {name }</span>
      <div className="flex items-center gap-4">
              <span className="font-semibold">€{ unitPrice}</span>
        <div className="flex items-center  gap-4">
          <Button size="small" buttonClickHandler={() => console.log("nesto")}>
            -
          </Button>
                  <span className="font-semibold">{quantity }</span>
          <Button size="small" buttonClickHandler={() => console.log("nesto")}>
            +
          </Button>
          <Button size="small" buttonClickHandler={() => console.log("nesto")}>
            Delete
          </Button>
        </div>
      </div>
    </article>
  );
}

export default CartItem
