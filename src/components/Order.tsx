import OrderInput from "./OrderInput";
const Order = () => {
  return (
    <div className="w-[750px] border-black mx-auto py-12 flex flex-col gap-4">
      <h2 className="font-semibold text-lg">Ready to order? Let's go!</h2>
      <form>
        <OrderInput info="First Name" />
        <OrderInput info="Phone number" />
        <OrderInput info="Address" />
        <div className="flex gap-4 py-4">
          <input type="checkbox" id="checkbox" className="w-6 h-6 accent-yellow-400 focus:ring-offset-2 focus:ring focus:ring-yellow-400" />
          <label
            htmlFor="checkbox"
            className="text-base font-medium"
          >
            Want to give your order priority?
          </label>
        </div>
      </form>
    </div>
  );
};

export default Order;
