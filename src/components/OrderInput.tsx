import Button from "./Button";
type OrderInputType = {
  info: string;
};

const OrderInput = ({ info }: OrderInputType) => {
  return (
    <div className="border relative border-b-stone-200 flex items-center justify-between py-1">
      <label htmlFor={info}>{info}</label>
      <input
        id={info}
        type="text"
        className="rounded-full p-4 text-sm transition-all outline-none duration-300 placeholder:text-stone-400 placeholder:text-sm focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 w-[600px]"
      />
      {info === "Address" && (
        <div className="absolute right-5">
          <Button buttonClickHandler={() => console.log("pozicija")} size="small">Get position</Button>
        </div>
      )}
    </div>
  );
};

export default OrderInput;
