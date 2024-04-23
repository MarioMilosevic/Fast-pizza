const OrderStatus = () => {
  return (
    <div className="w-[750px] mx-auto border border-black py-8">
      <div className="flex justify-between">
        <h2 className="font-medium text-lg">Order #AV1NX7 status</h2>
        <div className="flex gap-2">
          <span className="rounded-full text-sm uppercase text-stone-50 px-2 py-1 bg-red-500">
            Priority
          </span>
          <span className="rounded-full text-sm uppercase text-stone-50 px-2 py-1 bg-green-500">
            Preparing order
          </span>
        </div>
          </div>
          <div className="bg-stone-200 p-4">
              <span>Only 47 minutes left 😀</span>
          </div>
    </div>
  );
};

export default OrderStatus;
